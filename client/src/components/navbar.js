import { Link } from 'react-router-dom';

export default function navbar() {
    return (
        <header>
            <div className='container'>
                <Link to="/">
                    <h1>M Note</h1>
                </Link>
            </div>
        </header>
    )
}
