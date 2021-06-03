// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 20;

// Number of points on drive route (more = higher quality, but slower to process)
var driveSmoothness = 200;

// Value used to drive
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
//--------START----------//               
    {
        id: 'start',
        alignment: 'right',
        // hidden: false,
        title: 'Start Location: Working in Mozambique.',
        image: './Images/TestImage2.png',
        description: 'TEST TEXT.  The Liberty Project is a Christian faith-based non-profit established in Pemba, Northern Mozambique working with women who have been sexually exploited, abused and culturally oppressed. Our vision is to make disciples through sustainable initiatives lead by Local women. We are an organization empowering women to empower women.',
        
        location: {
            // center: { lon: -85.19922, lat: 45.69835 },
            // zoom: 6.25,
            // pitch: 60.00,
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
//--------------------------------------------------------------------------
//0
    {
        //id: 'drive-slide-0',
        id: 'SlideNum_0',
        hidden: true,
        alignment: 'center',
        location: { 

        },
        onChapterEnter: [
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
        onChapterExit: []
    },
//1    
    {
        id: 'SlideNum_1',
        hidden: true,
        alignment: 'center',
        location: { 

        },
        onChapterEnter: [
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
        onChapterExit: []
    },
//2
    {
        id: 'SlideNum_2',
        hidden: true,
        alignment: 'center',
        location: { 

        },
        onChapterEnter: [
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
        onChapterExit: []
    },
//3
    {
        id: 'SlideNum_3',
        hidden: true,
        alignment: 'center',
        location: { 

        },
        onChapterEnter: [
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
        onChapterExit: []
    },
//4
    {
id: 'SlideNum_4',
hidden: true,
alignment: 'center',
location: { 

},
onChapterEnter: [
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
        onChapterExit: []
    },
//5--------STOP 1----------// 
    {
    id: 'SlideNum_5',
    image: './Images/TestImage2.png',
    description: 'In Mozambique over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education.. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.',
    location: {
        center: { lon: -84.66245, lat: 47.95360 },
        zoom: 9.59,
        pitch: 60.00,
        bearing: -88.23 
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
    onChapterExit: [
        // {
        //     layer: 'stop-3',
        //     opacity: 0
        // }
    ]
    },
//6
    {
        id: 'SlideNum_6',
        hidden: true,
        alignment: 'center',
        location: { 

        },
        onChapterEnter: [
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
            //     layer: 'stops',
            //     opacity: 0
            // }
        ]
    },
//7
    {
        id: 'SlideNum_7',
        hidden: true,
        alignment: 'center',
        location: { 

        },
        onChapterEnter: [
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
            //     layer: 'stops',
            //     opacity: 0
            // }
        ]
    },
//8
    {
        id: 'SlideNum_8',
        hidden: true,
        alignment: 'center',
        location: { 

        },
        onChapterEnter: [
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
//9
    {
        id: 'SlideNum_9',
        hidden: true,
        alignment: 'center',
        location: { 

        },
        onChapterEnter: [
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
//10
    {
        id: 'SlideNum_10',
        hidden: true,
        alignment: 'center',
        location: { 

        },
        onChapterEnter: [
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
//11 --------STOP 2----------// 
{
    id: 'SlideNum_11',
    title: 'Stop 2: Our Response to the Numbers.',
    image: './Images/TestImage2.png',
    description: 'We believe prevention is key in equipping women and young girls for safe and bright futures free from exploitation. We work in our communities raising awareness and educating on topics such as: human rights and health. This educates and empowers women to make informed choices and look out for others in their local communities.',
    location: {
        center: { lon: -85.54922, lat: 48.65097 },
        zoom: 12.13,
        pitch: 60.00,
        bearing: -73.16
    },
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
//12
{
    id: 'SlideNum_12',
    hidden: true,
    alignment: 'center',
    location: { 

    },
    onChapterEnter: [
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
        //     layer: 'stops',
        //     opacity: 0
        // }
    ]
},
//13
{
    id: 'SlideNum_13',
    hidden: true,
    alignment: 'center',
    location: { 

    },
    onChapterEnter: [
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
//14
{
    id: 'SlideNum_14',
    hidden: true,
    alignment: 'center',
    location: { 

    },
    onChapterEnter: [
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
        //     layer: 'stops',
        //     opacity: 0
        // }
    ]
},
//15
{
    id: 'SlideNum_15',
    hidden: true,
    alignment: 'center',
    location: { 

    },
    onChapterEnter: [
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
//16
{
    id: 'SlideNum_16',
    hidden: true,
    alignment: 'center',
    location: { 

    },
    onChapterEnter: [
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
//17
{
    id: 'SlideNum_17',
    hidden: true,
    alignment: 'center',
    location: { 

    },
    onChapterEnter: [
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
        //     layer: 'stops',
        //     opacity: 0
        // }
    ]
},
//18
{
    id: 'SlideNum_18',
    hidden: true,
    alignment: 'center',
    location: { 

    },
    onChapterEnter: [
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
//19--------STOP 3----------// 
{
    id: 'SlideNum_19',
    title: 'Stop 3: What areas are we focusing on?',
    image: './Images/TestImage2.png',
    description: 'The main areas that the Liberty Project works in is: Education, Health education, vocational training, trauma therapy.',
    location: {
        center: { lon: -84.66245, lat: 47.95360 },
        zoom: 9.59,
        pitch: 60.00,
        bearing: -88.23 
    },
     mapAnimation: 'flyTo',
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
    onChapterExit: [

    ]
},
//20
{
    id: 'SlideNum_20',
    hidden: true,
    alignment: 'center',
    location: { 

    },
    onChapterEnter: [
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
//21
{
    id: 'SlideNum_21',
    hidden: true,
    alignment: 'center',
    location: { 

    },
    onChapterEnter: [
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
//22
{
    id: 'SlideNum_22',
    hidden: true,
    alignment: 'center',
    location: { 

    },
    onChapterEnter: [
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
//23
{
    id: 'SlideNum_23',
    hidden: true,
    alignment: 'center',
    location: { 

    },
    onChapterEnter: [
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
        //     layer: 'stops',
        //     opacity: 0
        // }
    ]
},
//24
{
    id: 'SlideNum_24',
    hidden: true,
    alignment: 'center',
    location: { 

    },
    onChapterEnter: [
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
//25--------STOP 4----------// 
{
    id: 'SlideNum_25',
    title: 'Stop 4: Education',
    image: './Images/TestImage2.png',
    description: 'In Mozambique over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education.. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.',
    location: {
        center: { lon: -84.74236, lat: 47.44431 },
        zoom: 12.25,
        pitch: 60.00,
        bearing: -13.71
    },
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
    onChapterExit: []
},
//26
{
    id: 'SlideNum_26',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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
//27
{
    id: 'SlideNum_27',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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
        //     layer: 'stops',
        //     opacity: 0
        // }
    ]
},
//28
{
    id: 'SlideNum_28',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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
}  ,
//29--------STOP 5----------// 
{
    id: 'SlideNum_29',
    title: 'Stop 5: Education',
    image: './Images/TestImage2.png',
    description: 'In Mozambique over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education.. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.',
    location: {
        center: { lon: -84.27767, lat: 46.52595 },
        zoom: 11.81,
        pitch: 60.00,
        bearing: -127.31
    },
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
//30
{
    id: 'SlideNum_30',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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
//31
{
    id: 'SlideNum_31',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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
        //     layer: 'stops',
        //     opacity: 0
        // }
    ]
},
//32
{
    id: 'SlideNum_32',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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
//33
{
    id: 'SlideNum_33',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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
//34
{
    id: 'SlideNum_34',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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
//35
{
    id: 'SlideNum_35',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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
//36
{
    id: 'SlideNum_36',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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
//37
{
    id: 'SlideNum_37',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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
//38--------STOP 6----------// 
{
    id: 'SlideNum_38',
    title: 'Stop 6: Education',
    image: './Images/TestImage2.png',
    description: 'In Mozambique over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education.. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.',
    location: {
        center: { lon: -83.77957, lat: 46.31815 },
        zoom: 12.25,
        pitch: 60.00,
        bearing: -68.99
    },
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
//39
{
    id: 'SlideNum_39',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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

    ]
},
//40
{
    id: 'SlideNum_40',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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

    ]
},
//41--------STOP 7----------// 
{
    id: 'SlideNum_41',
    title: 'Stop 7: Education',
    image: './Images/TestImage2.png',
    description: 'In Mozambique over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education.. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.',
    location: {
        center: { lon: -82.95255, lat: 46.18349 },
        zoom: 13.14,
        pitch: 60.00,
        bearing: -96.19
    },
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
//42    
    {
        id: 'SlideNum_42',
        hidden: true,
        alignment: 'center',
        location: {
        },
        onChapterEnter: [
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
    
        ]
    },
//43
{
    id: 'SlideNum_43',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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

    ]
},
//44
{
    id: 'SlideNum_44',
    hidden: true,
    alignment: 'center',
    location: {
    },
    onChapterEnter: [
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

    ]
},
//45--------STOP 8----------// 
{
    id: 'SlideNum_45',
    title: 'Stop 8: Education',
    image: './Images/TestImage2.png',
    description: 'In Mozambique over half the girls in primary school drop out by fifth grade and only 11% of those go on to complete secondary level education.. As part of our programming we are educating on basic things such as health issues; to offer women an opportunity to gain knowledge, then share it with their sphere of influence.',
    location: {
        center: { lon: -82.95255, lat: 46.18349 },
        zoom: 13.14,
        pitch: 60.00,
        bearing: -96.19
    },
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
//46
{
    id: 'SlideNum_46',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//47
{
    id: 'SlideNum_47',
    hidden: true,
    location: {

    },
    onChapterEnter: [
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
//48
{
    id: 'SlideNum_48',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//49
{
    id: 'SlideNum_49',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//50--------STOP 9----------//
{
    id: 'SlideNum_50',
    title: 'Stop 9: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
    location: {
        },
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
//51
{
    id: 'SlideNum_51',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//52
{
    id: 'SlideNum_52',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//53
{
    id: 'SlideNum_53',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//54--------STOP 10----------//
{
    id: 'SlideNum_54',
    title: 'Stop 10: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
    location: {
    },
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
//55
{
    id: 'SlideNum_55',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//56
{
    id: 'SlideNum_56',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//57
{
    id: 'SlideNum_57',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//58
{
    id: 'SlideNum_58',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//59
{
    id: 'SlideNum_59',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//60
{
    id: 'SlideNum_60',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//61
{
    id: 'SlideNum_61',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//62
{
    id: 'SlideNum_62',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//63
{
    id: 'SlideNum_63',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//64--------STOP 11----------//
{
    id: 'SlideNum_64',
    title: 'Stop 11: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
    location: {
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
    onChapterExit: []
},
//65
{
    id: 'SlideNum_65',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//66
{
    id: 'SlideNum_66',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//67
{
    id: 'SlideNum_67',
    hidden: true,
    location: {
    },
    onChapterEnter: [
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
//68--------STOP 12----------//
{
    id: 'SlideNum_68',
    title: 'Stop 12: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
    location: {
    },
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



//69
{
    id: 'SlideNum_69',
    hidden: true,
    location: {
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 0
        }

],
    onChapterExit: []
},
//70
{
    id: 'SlideNum_70',
    hidden: true,
    location: {
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 0
        }

],
    onChapterExit: []
},
//71
{
    id: 'SlideNum_71',
    hidden: true,
    location: {
    },
    onChapterEnter: [
          {
        layer: 'stop-13',
        opacity: 0
        }

],
    onChapterExit: []
},
//72
{
    id: 'SlideNum_72',
    hidden: true,
    location: {
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 0
        }

],
    onChapterExit: []
},
//73
{
    id: 'SlideNum_73',
    hidden: true,
    location: {
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 0
        }

],
    onChapterExit: []
},
//74
{
    id: 'SlideNum_74',
    hidden: true,
    location: {
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 0
        }

],
    onChapterExit: []
},
//75
{
    id: 'SlideNum_75',
    hidden: true,
    location: {
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 0
        }

],
    onChapterExit: []
},
//76--------STOP 13----------//
{
    id: 'SlideNum_76',
    title: 'Stop 13: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
    location: {
    },
    onChapterEnter: [
         {
        layer: 'stop-13',
        opacity: 1
        }

],
    onChapterExit: []
},


//77
{
    id: 'SlideNum_77',
    hidden: true,
    location: {
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 1
        }

],
    onChapterExit: []
},
//78
{
    id: 'SlideNum_78',
    hidden: true,
    location: {
    },
    onChapterEnter: [
        {
        layer: 'stop-13',
        opacity: 1
        }

],
    onChapterExit: []
},
//79
{
    id: 'SlideNum_79',
    hidden: true,
    location: {
    },
    onChapterEnter: [
        {
            layer: 'stop-13',
            opacity: 1
        }

],
    onChapterExit: []
},
//80--------STOP 14----------//
{
    id: 'SlideNum_80',
    title: 'Stop 14: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
    location: {
    },
    onChapterEnter: [
        {
            layer: 'stop-13',
            opacity: 1
        }

],
    onChapterExit: []
},


    ]
};