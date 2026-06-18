import { useState, useEffect } from "react";
import '../styles/TaskComponentStyles.css'

const quotes = [                    
        {
            quote:"Love is what remains after the falling in love is gone.",
            author:"Dragos Bratasanu",
            work:"Ph.D.",
            categories:[
                "love",
                "relationships",
                "wisdom",
                "truth"
                ]
            },
            {
                quote:"It wasn't my choice to write this story...it was my responsibility.",
                author:"Rhonda Fink-Whitman",
                work:"94 Maidens",
                categories:[
                    "writing",
                    "responsibility"
                    ]
            },
            {
                quote:"Some people come into your life as blessings, and others come in your life as lessons. You are both to me.",
                author:"Christy Pastore",
                work:"Unscripted",
                categories:[
                    "life",
                    "relationships",
                    "wisdom"
                    ]
            },
            {
                quote:"Courage is the lovely virtue-the rib of Himself that God sent down to His children.",
                author:"Sir James M. Barrie",
                work:"",
                categories:[
                    "courage",
                    "faith",
                    "wisdom"
                    ]
            },
            {
            quote:"Once it gets off the ground into space, all science fiction is fantasy.",
            author:"J.G. Ballard",
            work:"",
            categories:[
                "philosophy",
                "art"
                ]
            }
        ] 
      

function TaskComponent() {    
    const [count, setCount] = useState(0);
    const [data, setData] = useState('');
    const [prevRan, setPrevRan] = useState(-1);  

    useEffect(() => {
        var quoteJson = fetchData();
        setData(quoteJson.quote);
    }, []);
    
    return (
        <>
            <div className="container">
                <div className="header-tag">React Training Output</div>
                <h1 className="main-title">Task: Counter & Data Fetcher</h1>

                <div className="sections-wrapper">            
                    <div className="section">
                        <h2 className="section-title">Counter Section</h2>
                        <div className="counter-display">Current Count: <span id="count-el">{count}</span></div>
                        <button className="btn-blue" onClick={() => setCount((count) => count + 1)}>
                            <span>+</span> Increment Counter
                        </button>
                    </div>            
                    <div className="section">
                        <h2 className="section-title">API Data Section</h2>
                        <div className="fact-box" id="fact-el">
                            {data}
                        </div>
                        <button className="btn-green" onClick={() => setData(fetchData().quote)}>                            
                            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"><path d="M21.5 2v6h-6M21.34 15.57a10 10 0 1 1-.57-8.38l5.67-5.67"/></svg>
                            Refresh New Fact
                        </button>
                    </div>
                </div>
            </div>
        </>
    )
}

function fetchData() {
/*To be done : Make a call and retrieve from a free quote API */
    const randomIndex = Math.floor(Math.random() * quotes.length);
    return quotes[randomIndex];    
}

export default TaskComponent