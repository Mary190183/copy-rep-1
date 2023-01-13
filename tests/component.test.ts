import { title } from 'process';
import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ItemSlider, ItemSliderProps } from '../src/components/simple/item-slider/ItemSlider';

let container: null | HTMLElement = null;
beforeEach(() => {
    container = document.createElement('div');
    document.body.appendChild(container);
});

afterEach(() => {
    if (container !== null) {
        unmountComponentAtNode(container);
        container.remove();
        container = null;
    }
});

it("changes img when clicked", () => {
    const onChange = jest.fn();
    const props: ItemSliderProps = {
        title: 'Test',
        images: ["https://raw.githubusercontent.com/MaryAnzh/Online-Store/develop/src/assets/data-img/id3-02.png",
            "https://github.com/MaryAnzh/Online-Store/blob/develop/src/assets/data-img/id3-01.png?raw=true"],
    }

    act(() => {
        //ошибка 
        render(<ItemSlider title={ props.title } images = { props.images } />, container);
    });
}