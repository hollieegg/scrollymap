// Number of slides that will drive (more = smoother)
// If this doesn't match the number of slides named 'drive-slide' in config below you will not complete the full journey
var driveSlides = 11;

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
        {
            id: 'start',
            alignment: 'right',
            // hidden: false,
            title: 'Start Location',
            image: '',
            description: 'The start Location for the Bike fundraiser',
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
            title: 'STOP 1?',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
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
                    }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-1',
            title: 'STOP 2',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [
                {
                layer: 'stop-2',
                opacity: 1
                }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-2',
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {  
            },
            onChapterEnter: [
                {
                    layer: 'stop-3',
                    opacity: 1
                    }
  
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-3',
            title: 'Stop 3',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                // center: [ -85.55009, 48.64744],
                // zoom: 15.00,
                // pitch: 60.00,
                // bearing: 0.00 
            },
            // mapAnimation: 'flyTo',
            onChapterEnter: [ 
            //     {
            //     layer: 'stop-3',
            //     opacity: 1
            //     }
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
            title: 'Second Title',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [
                // {
                //     layer: 'stop-4',
                //     opacity: 1
                //     }
            ],
            onChapterExit: []
        },

        // You can add a normal slide in between the other slides
        {
            id: 'slide-4',
            title: 'i AM A STATIONARY cHAPTER. ',
            image: './path/to/image/source.png',
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
            title: 'STOP 5',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [
                // {
                //     layer: 'stop-5',
                //     opacity: 1
                //     }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-6',
            title: 'Stop 6',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [
                // {
                //     layer: 'stop-6',
                //     opacity: 1
                //     }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-7',
            title: 'STOP 7',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [
                // {
                //     layer: 'stop-7',
                //     opacity: 1
                //     }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-8',
            title: 'Stop 8',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [
                // {
                //     layer: 'stop-8',
                //     opacity: 1
                //     }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-9',
            title: 'Stop 9',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {},
            onChapterEnter: [
                // {
                //     layer: 'stop-9',
                //     opacity: 1
                //     }
            ],
            onChapterExit: []
        },
        {
            id: 'drive-slide-10',
            title: 'Stop 10',
            image: './path/to/image/source.png',
            description: 'Copy these sections to add to your story.',
            location: {
                center: [-78.31972, 44.30345],
                zoom: 15.00,
                pitch: 60.00,
                bearing: 0.00 
            },
            onChapterEnter: [ 
                // {
                // layer: 'stop-10',
                // opacity: 1
                // }
            ],
            onChapterExit: [
                // {
                //     layer: 'stops',
                //     opacity: 0
                // }
            ]
        }
        // {
        //     id: 'drive-slide-11',
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {},
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'drive-slide-12',
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {},
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'drive-slide-13',
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {},
        //     onChapterEnter: [],
        //     onChapterExit: []
        // },
        // {
        //     id: 'drive-slide-14',
        //     title: 'Second Title',
        //     image: './path/to/image/source.png',
        //     description: 'Copy these sections to add to your story.',
        //     location: {},
        //     onChapterEnter: [],
        //     onChapterExit: []
        // }
    ]
};
