import propTypes from 'prop-types';

export default function StarDisplay(props) {
  const { stars } = props;
  const imgPath = 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/';

  return (
    <div className="star-list">
      {
        (stars.length > 0) ? (
          stars.map((star) => (
            <div
              key={star.id}
              type="button"
              className="star-poster"
            >
              <button type="button">
                <img src={`${imgPath}${star.profile_path}`} alt={star.name} id={star.id} />
                <p>{star.name}</p>
              </button>
            </div>
          ))
        ) : ('')
      }
    </div>
  )
}

StarDisplay.propTypes = {
  stars: propTypes.arrayOf(propTypes.shape).isRequired,
}
