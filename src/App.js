import React from 'react';

import 'bootstrap/dist/css/bootstrap.min.css';

import AllocationForm from './components/AllocationForm';
import Budget from './components/Budget';
import ExpenseList from './components/ExpenseList';
import ExpenseTotal from './components/ExpenseTotal';
import Remaining from './components/Remaining';
// Add code to import the other components here under


import { AppProvider } from './context/AppContext';
import CurrencySelector from './components/CurrencySelector';

const App = () => {
    return (
        <AppProvider>
            <div className='container'>
                <h1 className='mt-3'>Company's Budget Allocation</h1>
                    <div className='row mt-3'>
                        {
                     <div className='col-sm'>
                        <Budget />
                        </div>      
                    }

                        {
                            <div className='col-sm'>
                                <Remaining />
                                </div>
                        }        

                        {
                    <div className='col-sm'>
                    <ExpenseTotal />
                    </div>
                    }
                    {
                    <div className='col-sm'>
                    <CurrencySelector />
                    </div>
                        }        
                      <div className='row mt-3'>
                        {
                            <div className='col-sm'>
                            <ExpenseList></ExpenseList>
                            </div>    
                        }                
                    </div> 
                        {
                            <div className='col-sm'>
                                <AllocationForm />
                            </div>
                        }        

                </div>
            </div>
        </AppProvider>
    );
};
export default App;
