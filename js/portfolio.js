'use strict';

const e = React.createElement;

class GalleryPage extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            studentWorks: [],
            selectedWork: null
        };
    }

    componentDidMount() {
        this.loadStudentWorks();
    }

    loadStudentWorks = () => {
        const works = [
            {
                image: 'media/portfolio/1.jpg',
                title: 'Логотип бренда угля "Green Forest"',
                description: 'Елена Тюкова'
            },
            {
                image: 'media/portfolio/2.jpg',
                title: 'Альбом для рисования',
                description: 'Александра Евдокимова'
            },
            {
                image: 'media/portfolio/3.jpg',
                title: 'Карточка товара',
                description: 'Наталья Пеганова'
            },
            {
                image: 'media/portfolio/4.jpg',
                title: 'Буклет',
                description: 'Валерия Скиба'
            },
            {
                image: 'media/portfolio/5.jpg',
                title: 'Дизайн бумажных стаканчиков',
                description: 'Валерий Шабанов'
            },
            {
                image: 'media/portfolio/6.jpg',
                title: 'Календарь',
                description: 'Екатерина Омельченко'
            }
        ];
        this.setState({ studentWorks: works });
    };

    showWorkDetails = (work) => {
        this.setState({ selectedWork: work });
    };

    render() {
        const { studentWorks, selectedWork } = this.state;

        return (
            React.createElement('main', null,
                React.createElement('section', { className: 'gallery' },
                    React.createElement('div', { className: 'gallery-grid' },
                        studentWorks.map((work, index) =>
                            React.createElement('img', {
                                key: index,
                                src: work.image,
                                alt: work.title,
                                onClick: () => this.showWorkDetails(work)
                            })
                        )
                    )
                ),
                selectedWork && React.createElement('section', { className: 'work-details' },
                    React.createElement('div', { className: 'work-container' },
                        React.createElement('img', {
                            src: selectedWork.image,
                            alt: selectedWork.title,
                            className: 'work-image'
                        }),
                        React.createElement('div', { className: 'work-info' },
                            React.createElement('h2', { className: 'work-title' }, selectedWork.title),
                            React.createElement('p', { className: 'work-description' }, selectedWork.description)
                        )
                    )
                )
            )
        );
    }
}

const domContainer = document.querySelector('#root');
const root = ReactDOM.createRoot(domContainer);
root.render(React.createElement(GalleryPage));