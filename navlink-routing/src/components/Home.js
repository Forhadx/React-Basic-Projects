import React from 'react';

const Home = props =>{
    const alpa = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
                  'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
                  'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',
                  'Y', 'Z'];

    const clickedHandler = (id) =>{
        props.history.push('/details/'+id);
    }

    
    return(
        <div className="home">
            {
                alpa.map(x =>(
                    <div key={x} onClick={()=>clickedHandler(x)} >
                        {x}
                    </div>
                ))
            }
        </div>
    );
}

export default Home;