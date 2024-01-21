import React from 'react';
import Banner from '../../Components/Banner/Banner';
import Featureitem from '../../Components/Featureitem/Featureitem';
import logofeatureChat from '../../assets/img/icon-chat.webp';
import logofeatureMoney from '../../assets/img/icon-money.webp';
import logofeatureSecurity from '../../assets/img/icon-security.webp';

function Home() {
    return (
        <>
            <Banner />{' '}
            <section className="features">
                <Featureitem
                    state={{
                        title: 'You are our #1 priority',
                        description:
                            'Need to talk to a representative? You can get in touch through our 24/7 chat or through a phone call in less than 5 minutes.',
                        logo: logofeatureChat,
                    }}
                />
                <Featureitem
                    state={{
                        title: 'More savings means higher rates',
                        description: 'The more you save with us, the higher your interest rate will be!',
                        logo: logofeatureMoney,
                    }}
                />
                <Featureitem
                    state={{
                        title: 'Security you can trust',
                        description:
                            'We use top of the line encryption to make sure your data and money is always safe.',
                        logo: logofeatureSecurity,
                    }}
                />
            </section>
        </>
    );
}

export default Home;
