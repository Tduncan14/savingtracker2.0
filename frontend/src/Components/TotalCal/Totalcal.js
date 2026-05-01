import React, { useState } from 'react';
import './TotalCal.css';
import { BarChart, Bar, ResponsiveContainer, XAxis, Tooltip, LabelList } from 'recharts';

const TotalCal = () => {
    const [total, setTotal] = useState({
        totalSavings: 11249.00,
        activeGoal: 7,
        goalsCompleted: 2,
        monthlyDeposits: [
            { name: 'Jan', uv: 0 }, { name: 'Feb', uv: 0 },
            { name: 'Mar', uv: 500 }, { name: 'Apr', uv: 400 },
            { name: 'May', uv: 400 }, { name: 'Jun', uv: 1150 },
            { name: 'Jul', uv: 1149 }, { name: 'Aug', uv: 2350 },
            { name: 'Sep', uv: 1025 }, { name: 'Oct', uv: 1550 },
            { name: 'Nov', uv: 1550 }, { name: 'Dec', uv: 1550 }
        ]
    });

    return (
        <div className="parentTotalCal">
            <div className="upperTotal">
                <div className="totalSavings">
                    <p>Total Savings</p>
                    <h1>${total.totalSavings.toLocaleString()}</h1>
                </div>

                <div className="activeGoals">
                    <p>Active goals</p>
                    <h1>{total.activeGoal}</h1>
                </div>

                <div className="goalCompleted">
                    <p>Goals completed</p>
                    <h1>{total.goalsCompleted}</h1>
                </div>
            </div>

            <div className="bottomTotal">
                <div className="Monthlydeposits">
                    <h3>Monthly deposits</h3>

                    <div className="months" style={{ width: '100%', height: '200px' }}>
                        <ResponsiveContainer width="100%" height="100%">
                            <BarChart
                                data={total.monthlyDeposits}
                                margin={{ top: 20, right: 10, left: 10, bottom: 60 }} // Increased bottom for names
                                /* 
                                   Removing barCategoryGap or setting it to 0 will make 
                                   bars touch. Set it to a small number like "5%" for 
                                   maximum width with just a tiny gap between them.
                                */
                                barCategoryGap="5%"
                            >
                                <XAxis
                                    dataKey="name"
                                    axisLine={false}
                                    tickLine={false}
                                    tick={{ fill: '#fff', fontSize: 15 }}
                                    dy={40} // More space for the money/name stack
                                />

                                <Tooltip
                                    cursor={{ fill: 'rgba(255,255,255,0.05)' }}
                                    contentStyle={{
                                        backgroundColor: '#3c3b40',
                                        border: '1px solid #B7B7B7',
                                        borderRadius: '8px'
                                    }}
                                />

                                <Bar
                                    dataKey="uv"
                                    fill="#EB4303"

                                    /* 
                                       REMOVED barSize={65}. 
                                       Now the bars will automatically expand to fill the width. 
                                    */
                                    radius={[3, 3, 3, 3]}
                                >
                                    <LabelList
                                        dataKey="uv"
                                        position="bottom"
                                        /* 
                                           Adjusting offset and dy together ensures 
                                           the stack stays centered in the gap.
                                        */
                                        offset={25}
                                        fill="#B7B7B7"
                                        fontSize={12}
                                        style={{ fontWeight: '700', letterSpacing: '0.5px' }}
                                        formatter={(value) => value > 0 ? `$${value.toLocaleString()}` : ''}
                                    />
                                </Bar>
                            </BarChart>
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TotalCal;