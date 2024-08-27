'use client';

import { useState, useEffect } from 'react';
import { 
  Container, 
  Typography, 
  Select, 
  MenuItem, 
  Box, 
  Card, 
  Button, 
  List, 
  ListItem,
  Divider,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
} from '@mui/material';
import { keyframes } from '@emotion/react';
import styled from '@emotion/styled';

// Import the mock data
import mockData from '../data/departure_risks.json';

// Define the pulsing animation
const pulseAnimation = keyframes`
  0% {
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0.7);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 123, 255, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 123, 255, 0);
  }
`;

// Create a styled Select component with the pulsing animation
const AnimatedSelect = styled(Select)`
  animation: ${pulseAnimation} 2s infinite;
`;

export default function Home() {
  const [selectedEmployee, setSelectedEmployee] = useState('');
  const [riskData, setRiskData] = useState(null);
  const [openDialog, setOpenDialog] = useState(false);
  const [currentMitigationStrategy, setCurrentMitigationStrategy] = useState('');
  const [currentItemId, setCurrentItemId] = useState(null);
  const [mitigatedItems, setMitigatedItems] = useState(new Set());
  const [isAnimating, setIsAnimating] = useState(true);

  useEffect(() => {
    // Stop the animation after 5 seconds
    const timer = setTimeout(() => {
      setIsAnimating(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);

  const handleEmployeeChange = (event) => {
    const selectedUserId = event.target.value;
    setSelectedEmployee(selectedUserId);
    const selectedEmployeeData = mockData.find(employee => employee.user_id === selectedUserId);
    setRiskData(selectedEmployeeData);
    setIsAnimating(false);
  };

  const handleMitigate = (itemType, itemId, mitigationStrategy) => {
    setCurrentMitigationStrategy(mitigationStrategy);
    setCurrentItemId(itemId);
    setOpenDialog(true);
  };

  const handleUndoMitigation = (itemId) => {
  setMitigatedItems(prevItems => {
    const newItems = new Set(prevItems);
    newItems.delete(itemId);
    return newItems;
  });
};

  const handleCloseDialog = () => {
    setOpenDialog(false);
    if (currentItemId) {
      setMitigatedItems(prevItems => new Set(prevItems).add(currentItemId));
    }
    setCurrentItemId(null);
  };

  const getRiskColor = (riskLevel) => {
    switch (riskLevel) {
      case 'HIGH':
        return 'red';
      case 'MEDIUM':
        return 'orange';
      case 'LOW':
        return 'green';
      default:
        return 'inherit';
    }
  };

  const RiskItem = ({ item, itemType }) => {
  const highestRisk = Object.values(item.risk_factors)[0];
  const riskColor = getRiskColor(highestRisk);
  const itemId = item.secret_id || item.activity_id;
  const isMitigated = mitigatedItems.has(itemId);

  return (
    <Card sx={{ mb: 4, p: 3, boxShadow: 3 }}>
      <Typography variant="h5" gutterBottom color="primary">
        {item.name} <span style={{ color: riskColor }}>({highestRisk})</span>
      </Typography>
      <Divider sx={{ my: 2 }} />
      <Typography variant="subtitle1" gutterBottom fontWeight="bold">
        Justification:
      </Typography>
      <Typography 
        variant="body1" 
        sx={{ whiteSpace: 'pre-line', mb: 2, }}
      >
        {Object.values(item.justifications).join('\n')}
      </Typography>
      <Typography variant="subtitle1" gutterBottom fontWeight="bold">
        Description:
      </Typography>
      <Typography variant="body1" paragraph>
        {item.description}
      </Typography>
      <Typography variant="subtitle1" gutterBottom fontWeight="bold">
        Risk Factor:
      </Typography>
      <Typography variant="body1" paragraph>
        {Object.keys(item.risk_factors).map(factor => 
          factor.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()).join(' ')
        ).join(', ')}
      </Typography>

      <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', mt: 2 }}>
        {isMitigated ? (
          <>
            <Typography variant="body1" color="success.main" fontWeight="bold">
              Mitigation in progress
            </Typography>
            <Typography 
              variant="body2" 
              sx={{ 
                ml: 1, 
                textDecoration: 'underline', 
                cursor: 'pointer',
                color: 'primary.main'
              }}
              onClick={() => handleUndoMitigation(itemId)}
            >
              Undo
            </Typography>
          </>
        ) : (
          <Button 
            variant="contained" 
            color="secondary" 
            size="large"
            onClick={() => handleMitigate(itemType, itemId, Object.values(item.mitigation_strategies)[0])}
          >
            Mitigate
          </Button>
        )}
      </Box>
    </Card>
  );
};

  const sortRiskItems = (items) => {
    const riskOrder = { HIGH: 0, MEDIUM: 1, LOW: 2 };
    return items.sort((a, b) => {
      const aRisk = Object.values(a.risk_factors)[0];
      const bRisk = Object.values(b.risk_factors)[0];
      return riskOrder[aRisk] - riskOrder[bRisk];
    });
  };

  return (
    <Container maxWidth="md" sx={{ py: 6 }}>
      <Typography variant="h3" component="h1" gutterBottom align="center" color="primary">
        Departure Risk Assessment
      </Typography>
      {isAnimating ? (
        <AnimatedSelect
          value={selectedEmployee}
          onChange={handleEmployeeChange}
          displayEmpty
          fullWidth
          sx={{ mb: 6 }}
        >
          <MenuItem value="" disabled>Select an employee</MenuItem>
          {mockData.map((employee) => (
            <MenuItem key={employee.user_id} value={employee.user_id}>
              Employee {employee.user_id}
            </MenuItem>
          ))}
        </AnimatedSelect>
      ) : (
        <Select
          value={selectedEmployee}
          onChange={handleEmployeeChange}
          displayEmpty
          fullWidth
          sx={{ mb: 6 }}
        >
          <MenuItem value="" disabled>Select an employee</MenuItem>
          {mockData.map((employee) => (
            <MenuItem key={employee.user_id} value={employee.user_id}>
              Employee {employee.user_id}
            </MenuItem>
          ))}
        </Select>
      )}

      {riskData && (
        <Box>
          <Typography variant="h5" gutterBottom align="left" sx={{ mb: 4, }}>
            Overall Risk Level: <span style={{ color: getRiskColor(riskData.overall_risk_level) }}>{riskData.overall_risk_level}</span>
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ mt: 6, mb: 3 , fontWeight: 'bold', borderTop: '2px solid',
            borderBottom: '2px solid',}} align="center" color="primary">
            Secret Access Risk
          </Typography>
          <List>
            {sortRiskItems([...riskData.secret_risk.high, ...riskData.secret_risk.medium, ...riskData.secret_risk.low]).map((secret) => (
              <ListItem key={secret.secret_id} sx={{ display: 'block', px: 0 }}>
                <RiskItem item={secret} itemType="secret" />
              </ListItem>
            ))}
          </List>

          <Typography variant="h5" gutterBottom sx={{ mt: 6, mb: 3 , fontWeight: 'bold', borderTop: '2px solid',
            borderBottom: '2px solid',}} align="center" color="primary">
            File Transfers Risk
          </Typography>
          <List>
            {sortRiskItems([...riskData.file_transfer_risk.high, ...riskData.file_transfer_risk.medium, ...riskData.file_transfer_risk.low]).map((transfer) => (
              <ListItem key={transfer.activity_id} sx={{ display: 'block', px: 0 }}>
                <RiskItem item={transfer} itemType="file_transfer" />
              </ListItem>
            ))}
          </List>
        </Box>
      )}

      <Dialog
        open={openDialog}
        onClose={handleCloseDialog}
        aria-labelledby="mitigation-dialog-title"
        aria-describedby="mitigation-dialog-description"
      >
        <DialogTitle id="mitigation-dialog-title">{"Mitigation Strategy"}</DialogTitle>
        <DialogContent>
          <Typography id="mitigation-dialog-description">
            {currentMitigationStrategy}
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} color="primary" autoFocus>
            Acknowledge
          </Button>
        </DialogActions>
      </Dialog>
    </Container>
  );
}