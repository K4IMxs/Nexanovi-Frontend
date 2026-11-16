import { Link } from 'react-router-dom';
import { Card } from './Card';

function RouterErrorBoundary() {
    return (
        <div>
            <Card className=''>
                <h1 className=''>Ocorreu um erro</h1>
                <p className=''>
                    não foi possível carregar esta rota. Por favor, tente novamente mais tarde.
                </p>
                <Link to='/' className=''>Voltar para a página inicial</Link>
            </Card>
        </div>
    );
}export { RouterErrorBoundary };