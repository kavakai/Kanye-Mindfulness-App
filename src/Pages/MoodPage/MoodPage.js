import React, { useContext, useState } from 'react';
import './MoodPage.scss'
import { MoodContext } from '../../Contexts/MoodContext';
import { UserContext } from '../../Contexts/UserContext';
import { QuoteContext } from '../../Contexts/QuoteContext';
import Slider from 'rc-slider';
import 'rc-slider/assets/index.css';
import { Link } from 'react-router-dom';
import { createDate } from '../../Utilities/Date';
import setImages from '../../Utilities/SetImages';


const MoodPage = () => {

    const [ currentMood, setCurrentMood ] = useState(3);

    const [mood, setMood] = useState([])
    const moodValue = { mood, setMood }

    const { quote } = useContext(QuoteContext);
    // const { mood, setMood } = useContext(MoodContext);
    const { user, setUser } = useContext(UserContext);

    const handleChange = (value) => {
        setCurrentMood(value)
    
    }


    const handleSubmit = () => {
        const newMood = {
            id: Date.now(),
            date: createDate(),
            todaysMood: currentMood
        };

        setMood([...user.moods, newMood])

    }
    
    return (
        <section className='mood-page'>
            <h2>Mood Page</h2>
            <h4>How ya feeling today</h4>
                <p>Current Value: {setImages(currentMood)}</p>
                <section style={{width: '500px'}}>
                <Slider 
                    defaultValue='1'
                    min={1}
                    max={5}
                    dots={true}
                    value={currentMood}
                    onChange={value => handleChange(value)}     
                    />
            </section>
                <Link to="/dashboard"><button onClick={handleSubmit}>Submit</button></Link>
        </section>

    );
};

export default MoodPage