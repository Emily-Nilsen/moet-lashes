import Image from 'next/image'
import Link from 'next/link'
import { StarIcon, ChevronDownIcon } from '@heroicons/react/24/solid'
import { Fragment, useState } from 'react'
import { Menu, Transition } from '@headlessui/react'

const reviews = {
  average: 5,
  totalCount: 64,
  counts: [
    { rating: 5, count: 64 },
    { rating: 4, count: 0 },
    { rating: 3, count: 0 },
    { rating: 2, count: 0 },
    { rating: 1, count: 0 },
  ],
  featured: [
    {
      id: 64,
      rating: 5,
      content: `
        <p>I love Chie's work, she got me, made the lashes fit my eyes and face shape, very good taste and the lashes last longer than any other salon. I have extended my lashes for many years in different cities, Chie is the best one, also I can say best experience in Cairns. Now will be hard to find next good one in new city.</p>
      `,
      author: 'Lisa',
    },
    {
      id: 63,
      rating: 5,
      content: `
        <p></p>
      `,
      author: 'Mya Lehmann',
    },
    {
      id: 62,
      rating: 5,
      content: `
        <p>I got my lashes done at Moet twice and it has never disappointed! The lash itself is very light and the glue does not irritate my eyes much, the tech is really gentle and communicates well.
        I got the double lashes, they were perfectly done and lasted really long, 4 weeks in and I still have almost full set volume just a bit more natural now.</p>
      `,
      author: 'Chloo',
    },
    {
      id: 61,
      rating: 5,
      content: `
        <p></p>
      `,
      author: 'Nahani Rose',
    },
    {
      id: 60,
      rating: 5,
      content: `
        <p></p>
      `,
      author: 'Yen Nhi Luu',
    },
    {
      id: 59,
      rating: 5,
      content: `
        <p>Perfect! I have long lasting natural lashes still in great condition (straight) after 3 weeks. Highly recommended.</p>
      `,
      author: 'Shirley Innes',
    },
    {
      id: 58,
      rating: 5,
      content: `
        <p>went here for my first sets of lashes ever, couldnt ask for any better, they are so natural and i got SO many compliments on them. so satisfied, never going anywhere else</p>
      `,
      author: 'catherine',
    },
    {
      id: 57,
      rating: 5,
      content: `
        <p>So happy with my eyelash extensions. Very friendly, professional service and they took the time to find out the exact look I was wanting. Very happy with the results and very fairly priced.</p>
      `,
      author: 'Kylie Achurch',
    },
    {
      id: 56,
      rating: 5,
      content: `
        <p></p>
      `,
      author: 'Tamza Ramza',
    },
    {
      id: 55,
      rating: 5,
      content: `
        <p>These were my first ever eyelash extensions and I couldn't have asked for any better! The price was great and she did a lovely job and I absolutely adore my lashes! She was very gentle and super polite and I enjoyed conversing with her, I could tell she was very professional at her job, I will definitely be coming back!</p>
      `,
      author: 'Sarah Newton',
    },
    {
      id: 54,
      rating: 5,
      content: `
        <p>Very good service</p>
      `,
      author: 'Gwen Kitchin',
    },
    {
      id: 53,
      rating: 5,
      content: `
        <p>Always perfect lashes 😍💟</p>
      `,
      author: 'maria grimaldi',
    },
    {
      id: 52,
      rating: 5,
      content: `
        <p>I love Moët. Amazing quality lashes exactly what I had asked for! Thank you!</p>
      `,
      author: 'Chloe Kent',
    },
    {
      id: 51,
      rating: 5,
      content: `
        <p>I get my ideal eyelashes here every time I come. highly recommend polite and professional treatment</p>
      `,
      author: 'Keiko',
    },
    {
      id: 50,
      rating: 5,
      content: `
        <p>I do highly recommend this shop as the Moet’s skill is amazing and it always makes satisfied result.
        For me It keeps nearly 2months If I do the double lashes. Price is valuable than other shops as well.</p>
      `,
      author: 'DAHEE MAY KIM',
    },
    {
      id: 49,
      rating: 5,
      content: `
        <p>Moët lashes is the best eyelashes salon I’ve ever been. I came here to get curly eyelashes several times.
        The salon owner is amazing. I can’t count how many times she made me happy. She remembers how much curly eyelashes I want to get then she makes my perfect eyelashes! It’s always exactly my taste. I sometimes fall asleep and sometimes have conversation with her. Either is great time! I’m always comfortable with this salon.
        I really like coming to this salon but I can’t come often because my eyelashes keep curls for a long time! : )</p>
      `,
      author: '藤山樹里',
    },
    {
      id: 48,
      rating: 5,
      content: `
        <p>Moe have been my go to eyelash girl for the last 2 years. The location is nice, I know my eyelashes are always on point. Good value for money🙂🙂🙂.</p>
      `,
      author: 'Wendy Robinson',
    },
    {
      id: 47,
      rating: 5,
      content: `
        <p>My lashes are absolutely gorgeous all day everyday and all thanks to Moet @Moet Lashes. Booking is stress free, relaxing environment, hygienic processes and to top it off you walk out so relaxed with the most beautiful lashes ever. I can’t thank you enough. Every appointment is always so much fun.</p>
      `,
      author: 'Lisa Aitken',
    },
    {
      id: 46,
      rating: 5,
      content: `
        <p>I have been going to Moe for years and I totally love her work, her attitude and her skills.
        She is skilful, and tailors her treatments to best suit her customers needs.  Moe also ensures the lashes she applies are best suited to your existing lashes as well as your lifestyle.
        I could not recommend Moe’s services more highly. I have passed her details onto so many of my friends, as I believe she is the best in Cairns.</p>
      `,
      author: 'Cathy McCullagh',
    },
    {
      id: 45,
      rating: 5,
      content: `
        <p>The service is really good, moet was super nice and polite and her lashes always last long and looks good. Would definitely recommend</p>
      `,
      author: 'Yvonne Lee',
    },
    {
      id: 44,
      rating: 5,
      content: `
        <p>Absolutely lovely lady to deal with and she does an excellent job with my lashes.</p>
      `,
      author: 'Katie Henderson',
    },
    {
      id: 43,
      rating: 5,
      content: `
        <p>I’ve been going to Moet for ages now and I cant think of anyone who does a better job she is so gentle with your eyes and your lashes that I fall asleep every time I get them done , my lashes always last for ages and look beautiful time and time again, whatever you want she can do and she can do it quickly, I love her❤️❤️❤️</p>
      `,
      author: 'Georgia Heemi',
    },
    {
      id: 42,
      rating: 5,
      content: `
        <p>Just got my lashes done today, I came down from Melbourne for a holiday and came here and I love them sm!!!! The lady was so nice and overall great experience :) 10/10!</p>
      `,
      author: 'Jemma Young',
    },
    {
      id: 41,
      rating: 5,
      content: `
        <p>I started using Moet Lashes when I relocated to Cairns 12 months ago and I am very happy with the services and my lashes. 🙏</p>
      `,
      author: 'Donna Wattenberg',
    },
    {
      id: 40,
      rating: 5,
      content: `
        <p>Super happy with Moet. I have been getting my lashes done at Moèt for a while now,  and I highly recommend her for, her quality work and fabulous personality.</p>
      `,
      author: 'Marg Ronan',
    },
    {
      id: 39,
      rating: 5,
      content: `
        <p>Moet does a wonderful job, she is an artist.  Lovely and professional, thank you 😊.</p>
      `,
      author: 'Bianca Stuart',
    },
    {
      id: 38,
      rating: 5,
      content: `
        <p>Have been getting my lashes done at Moët Lashes for over 12 months and am always 100% happy with my eyelash extensions. Moët is highly skilled and attentive, resulting in stunningly natural-looking lashes.
        Highly recommend for anyone seeking exceptional eyelash extensions.</p>
      `,
      author: 'Rachael Hughes',
    },
    {
      id: 37,
      rating: 5,
      content: `
        <p>I always get my eyelashes done with Moe&Chie, and their jobs are just perfect every time, I get so many compliments on my eyelash at everywhere!! Don't need to look for other eyelash artists in Cairns any more. Highly recommended!!</p>
      `,
      author: 'Ulysses AUS',
    },
    {
      id: 36,
      rating: 5,
      content: `
        <p>I have been going consistently for a few months now and the service is always amazing! Great quality lashes!</p>
      `,
      author: 'Shondell Esposito',
    },
    {
      id: 35,
      rating: 5,
      content: `
        <p>Amazing service, I go and see Moët every month and only have great things to say xx</p>
      `,
      author: 'Kotocorn',
    },
    {
      id: 34,
      rating: 5,
      content: `
        <p>I’ve been coming here for a while now and Moët doesn’t disappoint would highly recommend 👍</p>
      `,
      author: 'Kay Xiong',
    },
    {
      id: 33,
      rating: 5,
      content: `
        <p>The best and longest lashes I have got in Cairns</p>
      `,
      author: 'Brooke Vick',
    },
    {
      id: 32,
      rating: 5,
      content: `
        <p>Both the ladies who have done my lashes here (Moet & Chie I think?) have done the most fantastic job and are dedicated to making sure you achieve the look you want. They will customise the length, thickness & curl of the lashes as well as the number applied to each natural lash. The results are always amazing and last me 4 weeks!</p>
      `,
      author: 'Ros Peric',
    },
    {
      id: 31,
      rating: 5,
      content: `
        <p>Highly recommend! I’ve done my eyelashes many times here. She is very professional and my eyelashes lasts very long.</p>
      `,
      author: 'Maiko',
    },
    {
      id: 30,
      rating: 5,
      content: `
        <p>長期海外旅行へ行った際、日本人がやってるマツエクサロンを探していて、行ってみるとスタッフの方は可愛くて会話も楽しく、仕上がりも大満足！
        Cityのど真ん中にあってわかりやすいし行きやすくて海外でもホント困らないなって実感！！
        ケアンズって田舎だからそこまで求めてなかったけど、行ってホントよかった！
        ケアンズでマツエクサロン探してる方には絶対オススメです！！！！</p>
      `,
      author: '中野未来',
    },
    {
      id: 29,
      rating: 5,
      content: `
        <p></p>
      `,
      author: 'Davina Rebelle',
    },
    {
      id: 28,
      rating: 5,
      content: `
        <p>I have been to many salons. This salon was very nice in customer service and treatment! I definitely want to go again!</p>
      `,
      author: 'seira nishi',
    },
    {
      id: 27,
      rating: 5,
      content: `
        <p>Love my lashes - very natural..and done in no time at all :)) Definitely going back again!</p>
      `,
      author: 'Jacqui',
    },
    {
      id: 26,
      rating: 5,
      content: `
        <p>Highly recommended, great job & they have really lasted very well. Couldn't be happier.</p>
      `,
      author: 'Belinda Feher',
    },
    {
      id: 25,
      rating: 5,
      content: `
        <p>Thank you for always keeping me beautiful.  I have been to other salons and this one is the best.  I highly recommend it if you are looking for a salon.</p>
      `,
      author: 'Yu K',
    },
    {
      id: 24,
      rating: 5,
      content: `
        <p>I liked it the best of all the extensions I have ever had. I am very satisfied with the treatment, it was quick and careful. I will definitely go back in the future!</p>
      `,
      author: 'Nats M.',
    },
    {
      id: 23,
      rating: 5,
      content: `
        <p></p>
      `,
      author: 'Melisa Nieto',
    },
    {
      id: 22,
      rating: 5,
      content: `
        <p>Best lashes I've ever had. The lady was so gentle and I absolutely love the lashes! She explained all the different types, lengths and styles and made sure I got exactly what I wanted. So happy with them 😊❤️</p>
      `,
      author: 'sally gardiner',
    },
    {
      id: 21,
      rating: 5,
      content: `
        <p>Hands down the best lash place in cairns. I have been getting my lashes done for years and this is the only place I trust!</p>
      `,
      author: 'Mil g',
    },
    {
      id: 20,
      rating: 5,
      content: `
        <p>I’ve been going to Moët lashes for 3years now. She always does a Fantastic job on my eyelash lifts.</p>
      `,
      author: 'Tomoe Orland',
    },
    {
      id: 19,
      rating: 5,
      content: `
        <p>Moe is very impressive and she has been my lash artist since I moved to Cairns last year 🌟 I would never go anywhere else!</p>
      `,
      author: 'Jenalyn Monge',
    },
    {
      id: 18,
      rating: 5,
      content: `
        <p>First time getting my lashes done here, Love them, The procedure was so gentle and lashes are so lightweight I forget I even have lash extensions! Plus the prices are so good! Will definitely be coming back</p>
      `,
      author: 'Serina Ivy',
    },
    {
      id: 17,
      rating: 5,
      content: `
        <p>Moet, is an artist, with applying eyelash extensions, the time and care she takes, creates such a wow effect. Thank you so much</p>
      `,
      author: 'Kym Harris',
    },
    {
      id: 16,
      rating: 5,
      content: `
        <p>I'm one of the repeaters at Moet Lashes!
        The reason why I keep visiting this shop is that Moe, the owner of shop is professional, helpful and reasonable!
        Highly recommend, thanks always for your great service!!</p>
      `,
      author: 'PAO24ify',
    },
    {
      id: 15,
      rating: 5,
      content: `
        <p>I always have eyelash extensions with her she is the best</p>
      `,
      author: '内村葉',
    },
    {
      id: 14,
      rating: 5,
      content: `
        <p>Wouldn’t trust anyone else, does it exactly how I like them!</p>
      `,
      author: 'Elena Mitchell',
    },
    {
      id: 1,
      rating: 5,
      content: `
        <p>I have had eyelash extensions and eyelash perm many times with Moët Lashes. Both times they have always lasted a very long time and has come out very nice and natural. She is very quick, polite service for the customers, and fun! The location of the shop is very convenient. If my friends look for a good eyelash artist, I will definitely recommend her.</p>
      `,
      author: 'Misato Liu',
    },
    {
      id: 2,
      rating: 5,
      content: `
        <p>Great to have eyelash extensions because I don’t need to wear mascara and eyeliner anymore.  I have been experiencing eyelash extensions over 10 years and very satisfied with this beauty technique. Moet lashes is a very friendly place with good technical skill for eyelash extensions. She listens to clients and have the eyelash extensions done based on clients preferences. Never felt disappointed here. Highly recommend.</p>
      `,
      author: 'Su Lyisa Miles-Cadman',
    },
    {
      id: 3,
      rating: 5,
      content: `
        <p>Moe's eyelash extension was very thorough and perfect with great care. she was very friendly and kind to me, I had a wonderful time feeling at ease. I'd like to visit there again and really recommend her to others definitely! Thank you very much for lovely time.</p>
      `,
      author: 'Yumie Seki',
    },
    {
      id: 4,
      rating: 5,
      content: `
        <p>Highly recommended.
        She does very professional job. The eye lashes last longer compare to other salons.
        Also Moe always remembers our eyelashes condition and give us some advice to keep healthy eyelash.</p>
      `,
      author: 'Yuka Avard',
    },
    {
      id: 5,
      rating: 5,
      content: `
        <p>Best eyelash extensions and lush lift in Cairns with prompt treatment and great quality which lasted longer. Moe is very professional and always welcoming. Definitely recommend to others!</p>
      `,
      author: 'Chika Ritchie',
    },
    {
      id: 6,
      rating: 5,
      content: `
        <p>I have done eyelashes lift and eyelashes extensions many times in here. Her treatment was really gentle and high quality. My eyelashes became gorgeous!! I like this salon.</p>
      `,
      author: 'Natsumi Ota',
    },
    {
      id: 7,
      rating: 5,
      content: `
        <p>Moe does very good looking eyelash extensions !
        Always last quite long for me.
        I’m always happy with her service.
        She is very warm and  friendly!</p>
      `,
      author: 'Yukie KloostermanHaneda',
    },
    {
      id: 8,
      rating: 5,
      content: `
        <p>I get treated for classic lashes regularly. Always looks great and I’m always so relaxed during the treatment.I highly recommend Moe to everyone.</p>
      `,
      author: 'Sarah & Reina',
    },
    {
      id: 9,
      rating: 5,
      content: `
        <p>My eyelashes has done with her many times.
        She is always quick, beautiful and punctual.
        I strongly believe that she is the best eyelash artist in Far North Queensland.</p>
      `,
      author: 'Yuko Haintz',
    },
    {
      id: 10,
      rating: 5,
      content: `
        <p>I had lash done by Moët lashes and she was very gentle and I slept most of the time. Eyelash extensions was looking awesome too.</p>
      `,
      author: 'Masako Yamada',
    },
    {
      id: 11,
      rating: 5,
      content: `
        <p>I Finally found good eyelash salon!!!!
        Totally recommend Moët lashes.
        Great skills and very professional.</p>
      `,
      author: 'Tomomi Killian',
    },
    {
      id: 12,
      rating: 5,
      content: `
        <p>I treated my wife with a full set of volume lashes. She was pretty before, but now she's stunning. Great work!</p>
      `,
      author: 'Hombre',
    },
    {
      id: 13,
      rating: 5,
      content: `
        <p></p>
      `,
      author: 'nikita yonzone',
    },
    // Other reviews...
  ],
}

// Generate local image URLs
reviews.featured = reviews.featured.map((review, index) => ({
  ...review,
  avatarSrc: `/images/flowers/flower_${(index % 100) + 1}.webp`,
}))

const reviewPreviews = reviews.featured.slice(0, 3)
const reviewRemaining = reviews.featured.slice(3)

function classNames(...classes) {
  return classes.filter(Boolean).join(' ')
}

export function CustomerReviews() {
  const [isActive, setIsActive] = useState(false)

  const handleClick = (event) => {
    setIsActive((current) => !current)
  }

  return (
    <div className="bg-rose-50">
      <div className="mx-auto max-w-2xl px-4 pb-6 pt-16 sm:px-6 sm:pb-10 sm:pt-24 lg:grid lg:max-w-7xl lg:grid-cols-12 lg:gap-x-8 lg:px-8 lg:pt-32">
        <div className="lg:col-span-4">
          <h3 className="text-2xl font-extrabold tracking-tight text-zinc-900 sm:text-3xl">
            Customer Reviews
          </h3>

          <div className="mt-3 flex items-center">
            <div>
              <div className="flex items-center">
                {[0, 1, 2, 3, 4].map((rating) => (
                  <StarIcon
                    key={rating}
                    className={classNames(
                      reviews.average > rating
                        ? 'text-rose-400'
                        : 'text-zinc-300',
                      'h-5 w-5 flex-shrink-0'
                    )}
                    aria-hidden="true"
                  />
                ))}
              </div>
              <p className="sr-only">{reviews.average} out of 5 stars</p>
            </div>
            <p className="ml-2 text-sm text-zinc-900">
              Based on {reviews.totalCount} reviews
            </p>
          </div>

          <div className="mt-6">
            <h3 className="sr-only">Google reviews for Moët Lashes</h3>

            <dl className="space-y-3">
              {reviews.counts.map((count) => (
                <div key={count.rating} className="flex items-center text-sm">
                  <dt className="flex flex-1 items-center">
                    <p className="w-3 font-medium text-zinc-900">
                      {count.rating}
                      <span className="sr-only"> star reviews</span>
                    </p>
                    <div
                      aria-hidden="true"
                      className="ml-1 flex flex-1 items-center"
                    >
                      <StarIcon
                        className={classNames(
                          count.count > 0 ? 'text-rose-400' : 'text-zinc-300',
                          'h-5 w-5 flex-shrink-0'
                        )}
                        aria-hidden="true"
                      />

                      <div className="relative ml-3 flex-1">
                        <div className="h-3 rounded-full border border-zinc-200 bg-zinc-50" />
                        {count.count > 0 ? (
                          <div
                            className="absolute inset-y-0 rounded-full border border-rose-400 bg-rose-400"
                            style={{
                              width: `calc(${count.count} / ${reviews.totalCount} * 100%)`,
                            }}
                          />
                        ) : null}
                      </div>
                    </div>
                  </dt>
                  <dd className="ml-3 w-10 text-right text-sm tabular-nums text-zinc-900">
                    {Math.round((count.count / reviews.totalCount) * 100)}%
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="mt-10">
            <h3 className="text-xl font-medium text-zinc-900">
              Share your thoughts
            </h3>
            <p className="mt-1 text-sm text-zinc-600">
              Please feel free to write your own Google review!
            </p>

            <Link
              href="https://www.google.com/search?q=moet+lashes+cairns&sxsrf=ALiCzsbHz1T1TU9NE5phVzZgocO6-tS8vg%3A1653657673106&source=hp&ei=SNCQYqCwOrqRxc8Pye2b2Ak&iflsig=AJiK0e8AAAAAYpDeWbYSzNNWZTtLSBEl7vu2H1U9uIqJ&oq=moe&gs_lcp=Cgdnd3Mtd2l6EAEYADIECCMQJzIECAAQQzIKCC4QxwEQ0QMQQzIOCC4QgAQQxwEQ0QMQ1AIyCwguEIAEEMcBENEDMgUILhCABDIICC4QgAQQ1AIyCwguEIAEEMcBEK8BMgsILhCABBDHARCvATIFCAAQgAQ6BAguECc6CwguEIAEEMcBEKMCUABY2ANgxSFoAHAAeACAAW2IAasCkgEDMS4ymAEAoAEB&sclient=gws-wiz#lrd=0x697867d234fcefb7:0x6a54fdadd7fc308d,1,,,"
              target="_blank"
              rel="noreferrer"
              className="mt-6 inline-flex w-full items-center justify-center rounded-full border border-zinc-300 bg-white px-8 py-2 text-sm font-medium text-zinc-900 transition duration-300 ease-in-out hover:bg-rose-400 hover:text-white sm:w-auto lg:w-full"
            >
              Write a review
            </Link>
          </div>
        </div>

        <div className="mt-16 lg:col-span-7 lg:col-start-6 lg:mt-0">
          <h3 className="sr-only">Recent Google reviews for Moët Lashes</h3>

          <div className="flow-root">
            <div className="-my-12 divide-y divide-zinc-200">
              {reviewPreviews.map((review) => (
                <div key={review.id} className="py-12">
                  <div className="flex items-center">
                    <div className="relative h-12 w-12 rounded-full">
                      <Image
                        src={review.avatarSrc}
                        alt={`${review.author}.`}
                        fill
                        className="rounded-full object-cover"
                      />
                    </div>
                    <div className="ml-4">
                      <h2 className="text-sm font-bold text-zinc-900">
                        {review.author}
                      </h2>
                      <div className="mt-1 flex items-center">
                        {[0, 1, 2, 3, 4].map((rating) => (
                          <StarIcon
                            key={rating}
                            className={classNames(
                              review.rating > rating
                                ? 'text-rose-400'
                                : 'text-zinc-300',
                              'h-5 w-5 flex-shrink-0'
                            )}
                            aria-hidden="true"
                          />
                        ))}
                      </div>
                      <p className="sr-only">{review.rating} out of 5 stars</p>
                    </div>
                  </div>

                  <div
                    className="mt-4 space-y-6 text-base italic text-zinc-600"
                    dangerouslySetInnerHTML={{ __html: review.content }}
                  />
                  <span>
                    <button
                      className="pt-2 text-sm font-semibold text-rose-300"
                      // onClick={handleClick}
                    >
                      {/* {isActive ? '' : 'Read more'} */}
                    </button>
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex lg:mt-0">
        <Menu as="div" className="relative mt-4 flex justify-end">
          <div>
            <Menu.Button className="bg-t left-0 flex w-screen justify-end rounded-full px-4 py-2 text-sm font-semibold text-zinc-700 shadow-none transition duration-300 ease-in-out hover:text-rose-500 focus:outline-none focus:ring-0 sm:pr-6 lg:pr-8">
              Read more reviews
              <ChevronDownIcon
                className="-mr-1 ml-2 h-5 w-5"
                aria-hidden="true"
              />
            </Menu.Button>
          </div>

          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="absolute inset-x-0 left-0 z-10 mt-12 w-screen origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <div className="py-10">
                <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                  <div className="-my-12 divide-y divide-zinc-200">
                    {reviewRemaining.map((review) => (
                      <div key={review.id} className="py-12">
                        <div className="flex items-center">
                          <div className="relative h-12 w-12 rounded-full">
                            <Image
                              src={review.avatarSrc}
                              alt={`${review.author}.`}
                              className="rounded-full"
                              fill
                              objectFit="cover"
                              objectPosition="center"
                            />
                          </div>
                          <div className="ml-4">
                            <h2 className="text-sm font-bold text-zinc-900">
                              {review.author}
                            </h2>
                            <div className="mt-1 flex items-center">
                              {[0, 1, 2, 3, 4].map((rating) => (
                                <StarIcon
                                  key={rating}
                                  className={classNames(
                                    review.rating > rating
                                      ? 'text-rose-400'
                                      : 'text-zinc-300',
                                    'h-5 w-5 flex-shrink-0'
                                  )}
                                  aria-hidden="true"
                                />
                              ))}
                            </div>
                            <p className="sr-only">
                              {review.rating} out of 5 stars
                            </p>
                          </div>
                        </div>

                        <div
                          className="mt-4 space-y-6 text-base italic text-zinc-600"
                          dangerouslySetInnerHTML={{ __html: review.content }}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  )
}
