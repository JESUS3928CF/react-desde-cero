import Button from '../components/Button';
import TaskConfig from '../components/TaskConfig';

const MyComponent = () => {
    return (
        <div>
            <TaskConfig/>
            <Button route={'/'} />
        </div>
    );
};

export default MyComponent;
