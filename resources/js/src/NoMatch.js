import { Link } from 'react-router-dom'

const NoMatch = () => {
    return(
        <section>
            <div>
                <div className='links'>
                    <Link to='/'>Home</Link>
                </div>
                <div>
                    <h1>404 Page Not Found</h1>
                </div>
            </div>
        </section>
    );
}

export default NoMatch;