import React from 'react';
import { Card, CardContent, Typography, Box } from '@mui/material';
import { styled } from '@mui/material/styles';

interface SummaryCardProps {
  title: string;
  value: string;
  growthRate?: string;
}

const StyledCard = styled(Card)(({ theme }) => ({
  backgroundColor: "#1c1c1c",
  color: "#ffffff",
  height: "150px",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  textAlign: "center",
}));

const SummaryCard: React.FC<SummaryCardProps> = ({ title, value, growthRate }) => {
  return (
    <StyledCard variant="outlined">
      <CardContent>
        <Typography variant="h6" component="div">
          {title}
        </Typography>
        <Typography variant="h4" component="div" sx={{ fontWeight: 'bold', mt: 1 }}>
          {value}
        </Typography>
        {growthRate && (
          <Box sx={{ color: growthRate.startsWith('+') ? 'green' : 'red', mt: 1 }}>
            {growthRate}
          </Box>
        )}
      </CardContent>
    </StyledCard>
  );
};

export default SummaryCard;
