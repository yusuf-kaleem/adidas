import Card from './card';
import Adapter from 'enzyme-adapter-react-16';
import { shallow, configure } from 'enzyme';
import { fallback_api_data } from "../../constant/constant";


configure({adapter: new Adapter()});

test('card render correctly', () => {
     const wrapper = shallow( <Card ProductList={fallback_api_data}></Card>);
     expect(wrapper.find('[data-testid="data-card"]').length).toEqual(fallback_api_data.length)
    
});

