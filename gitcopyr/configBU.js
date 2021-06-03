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
            center: { lon: -85.19922, lat: 45.69835 },
            zoom: 6.25,
            pitch: 60.00,
            bearing: 0.00
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
        id: '0',
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
        id: '1',
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
        id: '2',
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
        id: '3',
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
id: '4',
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
    id: '5',
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
        id: '6',
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
        id: '7',
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
        id: '8',
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
        id: '9',
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
        id: '10',
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
    id: '11',
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
    id: '12',
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
    id: '13',
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
    id: '14',
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
    id: '15',
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
    id: '16',
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
    id: '17',
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
    id: '18',
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
//--------STOP 3----------// 
{
    id: '19',
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
    id: '20',
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
    id: '21',
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
    id: '22',
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
    id: '23',
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
    id: '24',
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
    id: '25',
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
    id: '26',
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
    id: '27',
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
    id: '28',
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
    id: '29',
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
    id: '30',
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
    id: '31',
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
    id: '32',
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
    id: '33',
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
    id: '34',
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
    id: '35',
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
    id: '36',
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
    id: '37',
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
    id: '38',
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
    id: '39',
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
    id: '40',
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
    id: '41',
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
        id: '42',
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
    id: '43',
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
    id: '44',
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
    id: '45',
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
    id: '46',
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
    id: '47',
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
    id: '48',
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
    id: '49',
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
    id: '50',
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
    id: '51',
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
    id: '52',
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
    id: '53',
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
    id: '54',
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
    id: '55',
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
    id: '56',
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
    id: '57',
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
    id: '58',
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
    id: '59',
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
    id: '60',
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
    id: '61',
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
    id: '62',
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
    id: '63',
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
    id: '64',
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
    id: '65',
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
    id: '66',
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
    id: '67',
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
    id: '68',
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
    id: '69',
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
    id: '70',
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
    id: '71',
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
    id: '72',
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
    id: '73',
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
    id: '74',
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
    id: '75',
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
    id: '76',
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
    id: '77',
    hidden: true,
    location: {
    },
    onChapterEnter: [
        {
    
        }

],
    onChapterExit: []
},
//78
{
    id: '78',
    hidden: true,
    location: {
    },
    onChapterEnter: [
        {

        }

],
    onChapterExit: []
},
//79
{
    id: '79',
    hidden: true,
    location: {
    },
    onChapterEnter: [
        {

        }

],
    onChapterExit: []
},
//80--------STOP 14----------//
{
    id: '80',
    title: 'Stop 14: End Exploitation',
    image: './Images/TestImage2.png',
    description: '95% of women in Mozambique have been sexually abused; and 70% of women suffer from PTSD. This is not okay. Throughout the global shut down for COVID-19 we have seen continual increases of exploitation and trafficking world wide. We are here in Mozambique doing preventative work to empower and educate women to help break the cycles of exploitation and poverty.',
    location: {
    },
    onChapterEnter: [


],
    onChapterExit: []
},


    ]
};