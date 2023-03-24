import styles from "./Map.module.sass";
const Map = () => {
  return (
    <div className={styles.map}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d591.3395005631323!2d37.609019475987665!3d55.752477722923835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1679548221916!5m2!1sru!2skg"
        width="100%"
        height="320"
        // style="border:0;"
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
};

export default Map;
