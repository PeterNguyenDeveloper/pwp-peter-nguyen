import {InfoBox} from "./InfoBox.tsx";
export function InfoBoxGroup(){
    const faqData = [
        {
            question: "Is the service free?",
            answer: "Yes, ABCWebForms offers a free plan with 50 submissions/day and basic features. Upgrade for more submissions and advanced features."
        },
        {
            question: "What are the limits of the free plan?",
            answer: "The free plan includes 50 submissions/day and basic features. Upgrade for more submissions and advanced options."
        },
        {
            question: "My contact form isn't working. What should I do?",
            answer: "Contact support at PeterNguyenDeveloper@gmail.com"
        },
        {
            question: "How is ABCWebForms different?",
            answer: "We focus on privacy by not storing submission data. Our free plan offers higher limits. Upgrade for advanced features."
        },
        {
            question: "Is my data safe?",
            answer: "We store only your email to send submissions. User data is never stored. Server logs are deleted periodically."
        },
        {
            question: "Is ABCWebForms GDPR compliant?",
            answer: "Yes, we comply with GDPR. We don’t collect personal data and don’t share form submissions. See our Privacy Policy for details."
        }
    ];
    return (
        <>
            {faqData.map((faq, index) => (
                <InfoBox key={index} head={faq.question} body={faq.answer}/>
            ))}
        </>
    );
}