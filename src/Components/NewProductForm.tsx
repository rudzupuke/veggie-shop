import React from 'react';
import { Product } from '../types';
import { nanoid } from 'nanoid';
import { HashLink as Link } from 'react-router-hash-link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAnglesDown } from '@fortawesome/free-solid-svg-icons';
import { faAnglesUp } from '@fortawesome/free-solid-svg-icons';

type Props = {
    addProducts: (val: Product) => void;
};

export default function NewProductForm({ addProducts }: Props) {
    const [formData, setFormData] = React.useState({ product: '', price: '', image: '' });
    const [isOpen, setIsOpen] = React.useState(false);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setFormData((prevFormData) => {
            return {
                ...prevFormData,
                [e.target.name]: e.target.value,
            };
        });
    }

    function handleSubmit(e: React.SyntheticEvent) {
        e.preventDefault();

        const newProductObject: Product = {
            product: formData.product,
            price: parseFloat(formData.price).toFixed(2),
            image: formData.image,
            id: nanoid(),
        };
        addProducts(newProductObject);
    }

    const arrowDown = <FontAwesomeIcon icon={faAnglesDown} />;
    const arrowUp = <FontAwesomeIcon icon={faAnglesUp} />;

    function openForm() {
        setIsOpen((prevIsOpen) => !prevIsOpen);
    }

    return (
        <>
            <div className="open-form" onClick={openForm}>
                <Link to="#form">{isOpen ? arrowUp : arrowDown}</Link>
            </div>
            {isOpen && (
                <div className="form fade-in" id="form">
                    <form onSubmit={handleSubmit}>
                        <div className="container form-container">
                            <div className="form__input">
                                <input
                                    type="text"
                                    placeholder="product"
                                    name="product"
                                    value={formData.product}
                                    onChange={handleChange}
                                    id="product"
                                />
                            </div>
                            <div className="form__input">
                                <input
                                    type="number"
                                    step="0.01"
                                    placeholder="price"
                                    name="price"
                                    value={formData.price}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="form__input">
                                <input
                                    type="text"
                                    placeholder="image"
                                    name="image"
                                    value={formData.image}
                                    onChange={handleChange}
                                />
                            </div>
                            <button className="btn-submit">Submit</button>
                        </div>
                    </form>
                </div>
            )}
        </>
    );
}
