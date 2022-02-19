import React from 'react'
import { Link } from 'react-router-dom';

const FeaturesPage = () => {
    return (
        <section className='feature-page'>
            <Link to={'/mood'}>
                <article>Mood</article>
            </Link>
            <Link to={'/journal'}>
                <article>Journal</article>
            </Link>
            <Link to='/dashboard'>
                <button>Dashboard</button>
            </Link>
        </section>
    );
};

export default FeaturesPage;