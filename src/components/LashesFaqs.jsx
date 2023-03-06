import Image from 'next/image'

import { Container } from '@/components/Container'
import backgroundImage from '@/images/background-1.webp'

const faqs = [
  [
    {
      question:
        'How long does an average eyelash extension or lash lift session take?',
      answer: [
        'We use spesialised eyelash glue to attach the ellipse eyelashes to each of your natural lashes. Since individual eyelash extensions are very delicate, initial eyelash extension treatments last for approximately 90 minutes.',
        'Lash lifts involve a perming treatment to curl the eyelashes and then setting them in position. A lash lift treatment takes approximately 60 to 90 minutes to complete.',
      ],
    },
  ],
  [
    {
      question: 'Will eyelash extensions damage my natural lashes?',
      answer: [
        'It is a common misconception that eyelash extensions damage your natural lashes. However, correct minimal glue application at the natural lash base, 0.5mm-1mm away from the eyelid, will not harm your natural lashes.',
        'Since your eyes are closed for the whole duration of the treatment, glue cannot physically enter your eyes. During your treatment, however, the glue’s fumes may cause a temporary stinging sensation. Just let your lash technician know so that they can use a fan or air blower to disperse the fumes.',
      ],
    },
  ],
  [
    {
      question: 'How long will my lash extensions last?',
      answer: [
        'Your new eyelash extensions will last between 2-6 weeks, depending on how well you take care of them. Eyelash extensions will shed faster with naturally oily skin.',
        'Due to natural breakages, you may want to return to the salon every three to four weeks to have your lashes filled. Regular filling of lashes will maintain your defined and glamorous look.',
        'Avoiding oil-based products and make-up remover will also help to maintain your eyelash extensions. Oil-based products can cause the glue to break down and your eyelash extensions to fall out prematurely.',
        'Also, avoid rubbing your eyes or pulling at your extensions after your treatment.',
      ],
    },
  ],
]

export function LashesFaqs() {
  return (
    <section
      id="faq"
      aria-labelledby="faq-title"
      className="relative overflow-hidden bg-slate-50 py-20 sm:py-32"
    >
      <Image
        className="absolute inset-0 opacity-60 blur-2xl"
        src={backgroundImage}
        alt="Moët Lashes frequently asked questions background image"
        fill
        unoptimized
      />
      <Container className="relative">
        <div className="mx-auto max-w-2xl lg:mx-0">
          <h3 id="faq-title" className="text-4xl font-extrabold text-zinc-800">
            Frequently asked{' '}
            <span className="font-medium italic text-rose-400">questions </span>
          </h3>
          <p className="text-lg font-medium text-zinc-600">
            Can’t find the answer you’re looking for? Reach out and{' '}
            <a
              href="tel:61466609975"
              rel="noopener noreferrer"
              className="font-medium text-rose-400 transition duration-300 ease-in-out hover:text-rose-500 hover:underline"
            >
              contact
            </a>{' '}
            us.
          </p>
        </div>
        <ul
          role="list"
          className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:max-w-none lg:grid-cols-3"
        >
          {faqs.map((column, columnIndex) => (
            <li key={columnIndex}>
              <ul role="list" className="flex flex-col gap-y-8">
                {column.map((faq, faqIndex) => (
                  <li key={faqIndex}>
                    <h3 className="font-display text-lg leading-7 text-slate-900">
                      {faq.question}
                    </h3>
                    <div className="mt-4 text-sm text-slate-700">
                      {faq.answer.map((answer, answerIndex) => (
                        <p key={answerIndex} className="mt-3">
                          {answer}
                        </p>
                      ))}
                    </div>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  )
}
