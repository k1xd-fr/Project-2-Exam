import Basket from "@/components/ui/Basket/Basket";
import Image from "next/image";
import { useState } from "react";

import styles from "./Cards.module.sass";

const Cards = () => {
  const [show, setShow] = useState(false);

  const trash = () => {
    setShow((show) => !show);
  };

  return (
    <div className={styles.cards}>
      <div className={styles.container}>
        <h1 className={styles.title}>Пицца</h1>
        <div className={styles.cards1}>
          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.cards2}>
          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>
        </div>

        <div className={styles.cards3}>
          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>
        </div>

        <div className={styles.cards4}>
          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>
        </div>

        <div className={styles.cards5}>
          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>

          <div className={styles.card}>
            <Image
              src="/images/pizza/PizzaDoubleChick.webp"
              width={253}
              height={253}
              className={styles.cardImage}
            />
            <div className={styles.cardDescription}>
              <h4 className={styles.cardTitle}>
                С креветками и <br /> трюфелями
              </h4>
              <p className={styles.description}>
                Домашнаяя паста феттуччине, сливочный соус, креветки, трюфельное
                масло, черный перец, пармезан.350 г
              </p>
              <div className={styles.priceBasket}>
                <h5 className={styles.price}>от 600 ₽</h5>
                <button className={styles.basketBtn} onClick={trash}>
                  В корзину
                </button>
              </div>
            </div>
          </div>
          <span className={styles.text}>News</span>
        </div>
      </div>
      {show && <Basket />}
    </div>
  );
};

export default Cards;
