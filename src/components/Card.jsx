import PropTypes from 'prop-types';

export default function Card(props) {
    return (
        <>
            {props.store.map((item, index) => (
                <div
                    key={index}
                    className="shadow-md bg-red-300 rounded-lg p-6 w-1/5"
                >
                    <img src={item.image} alt={item.title} />
                    <h2 className="text-xl font-bold">{item.id}</h2>
                    <h2 className="text-xl font-bold">{item.title}</h2>
                    <p className="mt-2 text-gray-600">{item.description}</p>
                    <p className="mt-2 text-gray-600">${item.price}</p>
                </div>
            ))}
        </>
    );
}

Card.propTypes = {
    store: PropTypes.arrayOf(
        PropTypes.shape({
            image: PropTypes.string,
            title: PropTypes.string,
            id: PropTypes.number,
            description: PropTypes.string,
            price: PropTypes.number,
        })
    ).isRequired,
};
