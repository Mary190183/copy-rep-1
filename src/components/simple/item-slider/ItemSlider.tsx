import React, { useState } from 'react';
import './ItemSlider.scss';

export type ItemSliderProps = {
    title: string,
    images: string[],
}

type ImgPreview = {
    id: string,
    src: string,
    title: string,
    isActive: boolean
}

export const ItemSlider = (props: ItemSliderProps) => {
    const images = props.images;

    let imagesSet: ImgPreview[] = images.map((src, i) => {
        const isActive = (i == 0);
        return {
            id: `${props.title}_${i}`,
            src: images[i],
            title: props.title,
            isActive: isActive,
        }
    });

    const [previewSRC, setSRC] = useState<string>(images[0]);
    const [prods, setProds] = useState(imagesSet);

    const change = (e: React.MouseEvent) => {
        const elem = e.target as HTMLElement;
        const id = elem.id;
        let src = '';
        imagesSet.forEach(el => {
            if (el.id === id) {
                el.isActive = true;
                src = el.src;
            } else {
                el.isActive = false;
            }
        });
        setSRC(src);
        setProds(imagesSet);
    }

    let views: JSX.Element[] = prods.map((el) => {
        const className = el.isActive ? 'slider__preview__img-active' : 'slider__preview__img';

        return (
            <li
                key={el.id}
                id={el.id}
                className={className}
                onClick={change}>
                <img src={el.src} alt={el.title} />
            </li>
        );
    });

    React.useEffect(() => {
        imagesSet = images.map((src, i) => {
            const isActive = (i == 0);
            return {
                id: `${props.title}_${i}`,
                src: images[i],
                title: props.title,
                isActive: isActive,
            }
        });
        setProds(imagesSet);
        views = prods.map((el) => {
            const className = el.isActive ? 'slider__preview__img-active' : 'slider__preview__img';
            return (
                <li
                    key={el.id}
                    id={el.id}
                    className={className}
                    onClick={change}>
                    <img src={el.src} alt={el.title} />
                </li>
            );
        });
        setSRC(images[0]);
    }, [images]);

    return (
        <div className='slider'>
            <ul className='slider__preview'>
                {
                    /* {previews} */
                    views
                }
            </ul>
            <div className='slider__image-wrap'>
                <img
                    className='slider__image-wrap__image'
                    src={previewSRC}
                    alt={props.title} />
            </div>
        </div>
    )
}