import React, { useEffect, useState } from 'react';
import Profile from './auth/Profile';
import { useAuth0 } from "@auth0/auth0-react";
import AuthenticationButton from './auth/AuthenticationButton';

export interface IForecastData {
    summary: string;
    date: string;
    temperatureC: string;
    temperatureF: string;
  }

const Secured = () => {

    const [forecasts, setForecasts] = useState<IForecastData[] | undefined>(undefined);
    const { getAccessTokenSilently, isAuthenticated } = useAuth0();

      useEffect(() => {

        // declare the async data fetching function
        const fetchData = async () => {
            const token = await getAccessTokenSilently();

            const response = await fetch('WeatherForecast',
            {
                headers: {
                  Authorization: `Bearer ${token}`,
                },
              }
            );
            
            const data = await response.json();
            setForecasts(data);
        }
      
        // call the function
        fetchData()// make sure to catch any error
          .catch(console.error);
      },[])

     function getPage(){
         if(isAuthenticated){
            return(
                <div>    
                    <table>
                        <thead>
                        <tr>
                            <th>Date</th>
                            <th>Temp. (C)</th>
                            <th>Temp. (F)</th>
                            <th>Summary</th>
                        </tr>
                        </thead>
                        <tbody>
                        {forecasts?.map(forecast =>
                            <tr key={forecast.date}>
                            <td>{forecast.date}</td>
                            <td>{forecast.temperatureC}</td>
                            <td>{forecast.temperatureF}</td>
                            <td>{forecast.summary}</td>
                            </tr>
                        )}
                        </tbody>
                    </table>
                </div>
            );
         }
         else{
            return(
            <div>
                <p>Log in first to see this area!</p>
            </div>);
         } 
     }

    return (
        <>
            {getPage()}
        </>
      );
    
};

export default Secured;