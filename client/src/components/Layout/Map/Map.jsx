import styles from "./Map.module.sass";
const Map = () => {
  return (
    <div className={styles.container}>
      <div className={styles.map}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d591.3395005631323!2d37.609019475987665!3d55.752477722923835!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sru!2skg!4v1679548221916!5m2!1sru!2skg"
          width="1100"
          height="322"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </div>
  );
};

export default Map;
