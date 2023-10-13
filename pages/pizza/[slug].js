import css from "../../styles/Pizza.module.css";
import Image from "next/image";
import Layout from "../../components/Layout";
import { client, urlFor } from "../../library/client";
import LeftArrow from "../../assets/arrowLeft.png"
import RightArrow from "../../assets/arrowRight.png"
/*making a dynamic page */

export default function Pizza({ pizza }) {
  const src = urlFor(pizza.image).url();

  return (
    <Layout>
      <div className={css.container}>
        <div className={css.imageWrapper}>
          <Image
            loader={() => src}
            alt=""
            src={src}
            layout="fill"
            unoptimized
            objectFit="cover"
          />
        </div>

        {/*right side */}
        <div className={css.right}>
            <span> {pizza.name}</span>
            <span> {pizza.details}</span>
            <span> $ {pizza.price[1]}</span>

          <div className={css.size}>
            <span>Size</span>
            <div className={css.sizeVariants}>
              <div> Small </div>
              <div> Medium </div>
              <div> Large </div>
            </div>
          </div>

          {/* Quantity counter place */}
          <div className={css.quantity}>
            <span> Quantity </span>

            <div className={css.counter}>
                <Image src={LeftArrowArrow}
                alt=""
                height={20} width={20}
                objectFit="contain" />

                <span> 1 </span>
                <Image src={RightArrow}
                alt=""
                height={20} width={20}
                objectFit="contain" />
                
            </div>
          </div>

          {/*buttons */}
          <div className={`btn ${css.btn}`}>
            Add to Cart
          </div>
          
        </div>
      </div>
    </Layout>
  );
}

/*defining a list of paths */
export async function getStaticPaths() {
  const paths = await client.fetch(
    `*[_type=="pizza" && defined(slug.current)][].slug.current`
  );

  return {
    paths: paths.map((slug) => ({ params: { slug } })),
    fallback: "blocking",
  };
}

export async function getStaticProps(context) {
  const { slug = "" } = context.params;
  const pizza = await client.fetch(
    `*[_type=="pizza" && slug.current == '${slug}'][0]`
  );
  return {
    props: {
      pizza,
    },
  };
}
