import React from "react";
import { Box, useTheme } from "@mui/material";
import Header from "../../components/app/Header";
import { ResponsiveChoropleth } from "@nivo/geo";
import { dataUser as user } from "../../data";
import { geoData } from "../../data/geoData";
const getCountryISO3 = require("country-iso-2-to-3");


const Geography = () => {
  const theme = useTheme();
  //   const { data } = useGetGeographyQuery();

  
  const mappedLocations = user.reduce((acc, { country }) => {
    // copuntry iso3 convert counry 2 char to 3 Char
    const countryISO3 = getCountryISO3(country);
   
    if (!acc[countryISO3]) {
      acc[countryISO3] = 0;
    }
    // count how many of the same country user has presented
    acc[countryISO3]++;
    return acc;
  }, {});
  


  // Lets destracture the vblue in is ans value peoperty
  const formattedLocations = Object.entries(mappedLocations).map(
    ([country, count]) => {
      return { id: country, value: count };
    }
  );

  return (
    <Box m="1.5rem 2.5rem">
      <Header title="GEOGRAPHY" subtitle="Find where your users are located." />
      <Box
        mt="40px"
        height="75vh"
        border={`1px solid ${theme.palette.secondary[200]}`}
        borderRadius="4px"
      >
        {formattedLocations ? (
          <ResponsiveChoropleth
            data={formattedLocations}
            
            theme={{
              textColor: '#eee',
              axis: {
                domain: {
                  line: {
                    stroke: theme.palette.secondary[200],
                  },
                },
                legend: {
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
                ticks: {
                  line: {
                    stroke: theme.palette.secondary[200],
                    strokeWidth: 1,
                  },
                  text: {
                    fill: theme.palette.secondary[200],
                  },
                },
              },
              legends: {
                text: {
                  fill: theme.palette.secondary[200],
                },
              },
              tooltip: {
                container: {
                  color: theme.palette.primary.main,
                },
              },
            }}
            features={geoData.features}
            margin={{ top: 0, right: 0, bottom: 0, left: -50 }}
            domain={[0, 60]}
            unknownColor="#666666"
            label="properties.name"
            valueFormat=".2s"
            projectionScale={150}
            projectionTranslation={[0.45, 0.6]}
            projectionRotation={[0, 0, 0]}
            borderWidth={1.3}
            borderColor="#ffffff"
            legends={[
              {
                anchor: "bottom-right",
                direction: "column",
                justify: true,
                translateX: 0,
                translateY: -125,
                itemsSpacing: 0,
                itemWidth: 94,
                itemHeight: 18,
                itemDirection: "left-to-right",
                itemTextColor: theme.palette.secondary[200],
                itemOpacity: 0.85,
                symbolSize: 18,
                effects: [
                  {
                    on: "hover",
                    style: {
                      itemTextColor: theme.palette.background.alt,
                      itemOpacity: 1,
                    },
                  },
                ],
              },
            ]}
          />
        ) : (
          <>Loading...</>
        )}
      </Box>
    </Box>
  );
};

export default Geography;
