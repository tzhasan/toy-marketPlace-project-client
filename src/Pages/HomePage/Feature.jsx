import payment from "../../assets/payment-card-svgrepo-com.svg";
import delivery from "../../assets/price-tag-3-svgrepo-com.svg";
import price from "../../assets/delivery-date-svgrepo-com.svg";

const Feature = () => {
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-24 mx-auto" bis_skin_checked={1}>
        <div className="text-center mb-20" bis_skin_checked={1}>
          <h1 className="text:md md:text-3xl text-yellow-300 font-bold md:my-6 my-4 text-center">
            Why choosing us !
          </h1>
          <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
            At our toy selling site, we take immense pride in being more than
            just an online store; we are your trusted partner in bringing joy
            and happiness to children and families alike. Here's why choosing us
            will be the best decision for all your toy-buying needs.
          </p>
          <div className="flex mt-6 justify-center" bis_skin_checked={1}>
            <div
              className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"
              bis_skin_checked={1}
            />
          </div>
        </div>
        <div
          className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6"
          bis_skin_checked={1}
        >
          <div
            className="p-4 md:w-1/3 flex flex-col text-center items-center"
            bis_skin_checked={1}
          >
            <div
              className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
              bis_skin_checked={1}
            >
              <img className="w-[70%]" src={delivery} alt="" />
            </div>
            <div className="flex-grow" bis_skin_checked={1}>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Free Speedy Delivery
              </h2>
              <p className="leading-relaxed text-base">
                At our online store, we believe that receiving your desired
                products should be as joyful as the products themselves. That's
                why we offer Free Speedy Delivery, ensuring that your purchases
                reach you swiftly and seamlessly.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div
            className="p-4 md:w-1/3 flex flex-col text-center items-center"
            bis_skin_checked={1}
          >
            <div
              className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
              bis_skin_checked={1}
            >
              <img className="w-[70%]" src={payment} alt="" />
            </div>
            <div className="flex-grow" bis_skin_checked={1}>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Flexible Payment Options
              </h2>
              <p className="leading-relaxed text-base">
                We understand that each customer's financial preferences are
                unique. That's why we offer Flexible Payment Options, providing
                you with the freedom to choose a payment method that best suits
                your needs and convenience.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
          <div
            className="p-4 md:w-1/3 flex flex-col text-center items-center"
            bis_skin_checked={1}
          >
            <div
              className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0"
              bis_skin_checked={1}
            >
              <img className="w-[70%]" src={price} alt="" />
            </div>
            <div className="flex-grow" bis_skin_checked={1}>
              <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                Best Price Guaranteed
              </h2>
              <p className="leading-relaxed text-base">
                We believe that everyone deserves access to top-notch products
                without compromising their budget. With our Best Price
                Guaranteed, you can shop with confidence, knowing that you won't
                find a better deal anywhere else.
              </p>
              <a className="mt-3 text-indigo-500 inline-flex items-center">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;