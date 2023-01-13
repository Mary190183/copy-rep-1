import { render, unmountComponentAtNode } from 'react-dom';
import { act } from 'react-dom/test-utils';
import { ItemSlider, ItemSliderProps } from '../src/components/simple/item-slider/ItemSlider';

let container = null;
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

it("renders user data", async () => {
    const fakeSlider = {
        title: 'Test',
        images: ["https://raw.githubusercontent.com/MaryAnzh/Online-Store/develop/src/assets/data-img/id3-02.png",
            "https://github.com/MaryAnzh/Online-Store/blob/develop/src/assets/data-img/id3-01.png?raw=true"],
    };
    jest.spyOn(global, "fetch").mockImplementation(() =>
        Promise.resolve({
            json: () => Promise.resolve(fakeSlider)
        })
    );

    await act(async () => {
        render(< ItemSlider title='Test' images={''} />, container);
    });

    expect(container.querySelectorAll('img').length).toBe(2);

    global.fetch.mockRestore();
});