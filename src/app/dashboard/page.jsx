import React from 'react';
import Counter from '../components/Counter';

const DashboardPage = () => {

    console.log('Dashboard page render')

    return (
        <div>
            <h1>Dashboard Page</h1>

                <Counter> </Counter>

            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>
    );
};

export default DashboardPage;