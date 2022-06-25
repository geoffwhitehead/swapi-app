import { Card, CardActions, CardContent, Collapse, IconButton, IconButtonProps, styled, Typography } from "@mui/material"
import React from "react"
import { Planet } from '../api'
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface PlanetCardProps {
    planet: Planet
}

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  
const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  }));
  
export const PlanetCard: React.FC<PlanetCardProps> = ({planet}) => {
    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

    return <Card>
        <CardContent>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {planet.name}
        </Typography>
        <Typography variant="h5" component="div">
          {planet.climate}
        </Typography>
        <Typography sx={{ mb: 1.5 }} color="text.secondary">
          {planet.diameter}
        </Typography>
        <Typography variant="body2">
          {planet.terrain}
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        
        <ExpandMore
          expand={expanded}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </ExpandMore>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>
            Surface water: {planet.surface_water}
          </Typography>
        </CardContent>
      </Collapse>
    </Card>
}