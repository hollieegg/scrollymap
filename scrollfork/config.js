// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 13;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 4000;

// Value used to drive
// var driveTime = driveSlides*driveSmoothness;
var driveTime = driveSlides*driveSmoothness;

// Do you want to follow the point? True = follow
// True is not that smpooth- working on seeing if can get it to follow more smoothly 
var followPoint = true;
// ...If so, what zoom, pitch, and bearing should be used to follow?
var followZoomLevel = 7;
var followBearing = 15;
var followPitch = 0;
// to add 'driving' slides just make sure to add 'drive to beginning of slide id'
// you also need to add a running total to the end of each 'drive-slide', (ex. drive-slide-0, drive-slide-1, drive-slide-2, etc.)
var config = {
    style: 'mapbox://styles/vanritto/ckp6e61p50nwy17o58eyrsnoe',
    accessToken: 'pk.eyJ1IjoidmFucml0dG8iLCJhIjoiY2ttd3MwbmIxMGh2azJubjh5NHpmbWloaSJ9.cHakwI5tJ_9g4G56n5tlFQ',
    // showMarkers: true,
    // markerColor: 'green',
    theme: 'liberty',
    alignment: 'left',
    title: 'Liberty Project',
    subtitle: 'A descriptive and interesting subtitle to draw in the reader',
    byline: 'By a Digital Storyteller',
    footer: 'Source: source citations, etc.',
    chapters: [
        {
            id: 'start',
            alignment: 'right',
            // hidden: false,
            title: 'Start Location: Working in Mozambique.',
            image: './Images/TestImage2.png',
            description: 'TEST TEXT.  The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
            location: {
                // center: [-89.2477, 48.3809],
                // zoom: 9.83,
                // pitch: 0.00,
                // bearing: 0.00
            },
            onChapterEnter: [
                {
                    layer: 'start-finish',
                    opacity: 1
                    },
                    {
                    layer: 'stop-1',
                    opacity: 0
                    },
                    {
                    layer: 'stop-2',
                    opacity: 0
                    },
                    {
                    layer: 'stop-3',
                    opacity: 0
                    },
                    {
                    layer: 'stop-4',
                    opacity: 0
                    },
                    {
                    layer: 'stop-5',
                    opacity: 0
                    },
                    {
                    layer: 'stop-6',
                    opacity: 0
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
                    
            ],
            onChapterExit: [
                // {
                //     layer: 'start-finish',
                //     opacity: 0
                //     }
            ]
        },
        // {
        //     id: 'slide-0',
        //     title: 'Fundraiser',
        //     // image: './path/to/image/source.png',
        //     description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
        //     location: { 
        //     },
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        {
            id: 'drive-slide-0',
            title: 'STOP 1: Working in Mozambique.',
            image: './Images/TestImage2.png',
            description: 'The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
            location: {
           
                // location information is from the drive route
            },
            onChapterEnter: [
                {
                    layer: 'stop-1',
                    opacity: 1
                    },
                    {
                    layer: 'stop-2',
                    opacity: 0
                    },
                    {
                    layer: 'stop-3',
                    opacity: 0
                    },
                    {
                    layer: 'stop-4',
                    opacity: 0
                    },
                    {
                    layer: 'stop-5',
                    opacity: 0
                    },
                    {
                    layer: 'stop-6',
                    opacity: 0
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }

            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: 'STOP 2: Why Mozambique?',
            image: './Images/TestImage2.png',
            description:'We believe prevention is key in equipping women and young girls for safe and bright futures free from exploitation. We work in our communities raising awareness and educating on topics such as: human rights and health. This educates and empowers women to make informed choices and look out for others in their local communities.',
            location: {},
            onChapterEnter: [
                {
                    layer: 'stop-2',
                    opacity: 1
                    },
                    {
                    layer: 'stop-3',
                    opacity: 0
                    },
                    {
                    layer: 'stop-4',
                    opacity: 0
                    },
                    {
                    layer: 'stop-5',
                    opacity: 0
                    },
                    {
                    layer: 'stop-6',
                    opacity: 0
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }

            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'Stop 3: Our Response to the Numbers.',
            image: './Images/TestImage2.png',
            description: 'We believe prevention is key in equipping women and young girls for safe and bright futures free from exploitation. We work in our communities raising awareness and educating on topics such as: human rights and health. This educates and empowers women to make informed choices and look out for others in their local communities.',
            location: {  
            },
            onChapterEnter: [
                {
                    layer: 'stop-3',
                    opacity: 1
                    },
                    {
                    layer: 'stop-4',
                    opacity: 0
                    },
                    {
                    layer: 'stop-5',
                    opacity: 0
                    },
                    {
                    layer: 'stop-6',
                    opacity: 0
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
  
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: 'Stop 4: What areas are we focusing on?',
            image: './Images/TestImage2.png',
            description: 'The main areas that the Liberty Project works in is: Education, Health education, vocational training, trauma therapy.',
            location: {
                // center: [ -85.55009, 48.64744],
                // zoom: 15.00,
                // pitch: 60.00,
                // bearing: 0.00 
            },
            // mapAnimation: 'flyTo',
            onChapterEnter: [ 
                {
                    layer: 'stop-4',
                    opacity: 1
                    },
                    {
                    layer: 'stop-5',
                    opacity: 0
                    },
                    {
                    layer: 'stop-6',
                    opacity: 0
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
            ],
            onChapterExit: [
                // {
                //     layer: 'stop-3',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'drive-slide-4',
            title: 'Stop 5: Education',
            image: './Images/TestImage2.png',
            description: 'In Mozambique over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education.. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.',
            location: {},
            onChapterEnter: [
                {
                    layer: 'stop-5',
                    opacity: 1
                    },
                    {
                    layer: 'stop-6',
                    opacity: 0
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
            ],
            onChapterExit: []
        },

        // You can add a normal slide in between the other slides
        {
            id: 'slide-4',
            title: 'i AM A STATIONARY cHAPTER. ',
            image: './Images/TestImage2.png',
            description: 'Copy these sections to add to your story.',
            location: {
                // center: [-84.748093, 47.472679],
                // zoom: 9.83,
                // pitch: 0.00,
                // bearing: 0.00 
            },
            // mapAnimation: 'flyTo',
            // rotateAnimation: false,
            // callback: '',
            onChapterEnter: [],
            onChapterExit: []
        },
        {
            id: 'drive-slide-5',
            title: 'STOP 6: Health Education',
            image: './Images/TestImage2.png',
            description: 'We have partnered with  @couldyoucup to help bring accessible menstrual education & management for women & girls in Northern Mozambique.  “The Could You Cup gives me security and confidence while using during my menstrual cycle. It’s the best way to prevent the shame that we receive from people! I choose Could You Cup!” - Giniquina 14 years. What a powerful testimony from this beautiful one. We are so thankful to be able to help equip girls to manage their periods in a way that ends period shaming and keeps them in school! Thank you @couldyoucup for your partnership, Together we bring freedom and bright futures to precious girls in Northern Mozambqiue! #menstruationmatters #theLibertyProject #Pemba.',
            location: {},
            onChapterEnter: [
                {
                    layer: 'stop-6',
                    opacity: 1
                    },
                    {
                    layer: 'stop-7',
                    opacity: 0
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: 'Stop 7: Vocational Training',
            image: './Images/TestImage2.png',
            description: 'In Northern Mozambique 45% of women are unemployed. This  is why vocational training and education are a priority of the Liberty Project. As we are having to move to another province in Mozambique due to the conflict; partner with us to help bring vocational training to the women we work with! You can also support this through the Liberty Market Place as more of their projects are featured.',
            location: {},
            onChapterEnter: [
                {
                    layer: 'stop-7',
                    opacity: 1
                    },
                    {
                    layer: 'stop-8',
                    opacity: 0
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: 'STOP 8: Trauma Therapy',
            image: './Images/TestImage2.png',
            description: '70% of Women suffer from PTSD in Mozambique, and with the growing civil unrest and violent conflict we are only seeing increases of this type of severe trauma. This is why we offer holistic care including counselling, so that women can work through things in a peaceful atmosphere. If you want to partner with us and see women restored and transformed, donate today!',
            location: {},
            onChapterEnter: [
                {
                    layer: 'stop-8',
                    opacity: 1
                    },
                    {
                    layer: 'stop-9',
                    opacity: 0
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-8',
            title: 'Stop 9: Why the Fundraiser?',
            image: './Images/TestImage2.png',
            description: 'Our Board Chair is a cyclist and thought as a challenge it would be great to bike from her current home in Thunder Bay to her old home in Peterborough County. And thus idea was born. Thanks to the Fleming College collaboration project, a student team was able to build this webpage and mapping application to show case the challenge and help people get connected. We are excited to see the world wide reach of this fun fitness challenge and fundraiser.',
            location: {},
            onChapterEnter: [
                {
                    layer: 'stop-9',
                    opacity: 1
                    },
                    {
                    layer: 'stop-10',
                    opacity: 0
                    },
                    {
                    layer: 'stop-11',
                    opacity: 0
                    },
                    {
                    layer: 'stop-12',
                    opacity: 0
                    },
                    {
                    layer: 'stop-13',
                    opacity: 0
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-9',
            title: 'Stop 10: End Exploitation',
            image: './Images/TestImage2.png',
            description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
            location: {},
            onChapterEnter: [
                {
                layer: 'stop-10',
                opacity: 1
                },
                {
                layer: 'stop-11',
                opacity: 0
                },
                {
                layer: 'stop-12',
                opacity: 0
                },
                {
                layer: 'stop-13',
                opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-10',
            title: 'Stop 11: Bringing Hope',
            image: './Images/TestImage2.png',
            description: 'This ride has been such fun, even though it took a very different turn because of restrictions. Our Founder and Board Chair want to say a big thank you for everyone who donated, participated in the ride and shared our story with their friends & family!  We are excited to continue our journey in Northern Mozambique helping women to empower one another, & see the end of exploitation of women & children in Mozambique (& around the world).',
            location: {
                // center: [-78.31972, 44.30345],
                // zoom: 15.00,
                // pitch: 60.00,
                // bearing: 0.00 
            },
            onChapterEnter: [ 
                {
                layer: 'stop-11',
                opacity: 1
                },
                {
                layer: 'stop-12',
                opacity: 0
                },
                {
                layer: 'stop-13',
                opacity: 0
                }
            ],
            onChapterExit: [
                // {
                //     layer: 'stops',
                //     opacity: 0
                // }
            ]
        },
        {
            id: 'drive-slide-11',
            title: 'Stop 12: Moving',
            image: './Images/TestImage2.png',
            description: 'WOMEN! Our ladies are wonderful and are the heart of the project. It is our absolute joy to journey with them as they start to experience true freedom when knowing their identity is found in Jesus’ love and purpose for them!   As our ministry shifts to an entirely different area in Northern Mozambique, please pray that we will continue to reach and support more women. We pray that God will provide us with the resources and strength to educate and empower the vulnerable through sharing the Gospel, teaching health and human rights and equipping women with new artisanal skills.',
            location: {},
            onChapterEnter: [
                {
                layer: 'stop-12',
                opacity: 1
                },
                {
                layer: 'stop-13',
                opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-12',
            title: 'Stop 13: Partner with Us',
            image: './Images/TestImage2.png',
            description: 'Thank you for following our journey & for giving! This fundraiser will continue helping women be empowered, educated and to build a life free from exploitation.                                                       If you would like to participate in the virtual challenge please follow the link to our eventbrite, you will be emailed the link to the virtual race following your registration.',
            location: {},
            onChapterEnter: [
                {
                layer: 'stop-13',
                opacity: 0
                }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-13',
            title: 'Stop 14: Working in Mozambique.',
            image: './Images/TestImage2.png',
            description: 'TEST TEXT.  The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
            location: {},
            onChapterEnter: [],
            onChapterExit: []
        }
        // {
        //     id: 'drive-slide-14',
        //     title: 'Stop 15',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {},
        //     onChapterEnter: [],
        //     onChapterExit: []
        // }
    ]
};
