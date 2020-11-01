import PsrContainerInterface from 'psr-container/dist/ContainerInterface';
import LaminasFactoryInterface from './LaminasFactoryInterface';

interface LaminasDelegatorInterface {
    (container: PsrContainerInterface, name: string, factory: LaminasFactoryInterface): any;
}

export default LaminasDelegatorInterface;
