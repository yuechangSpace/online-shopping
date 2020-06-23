import React from 'react';
import data from '../asset/directory_data.js'
import Header from '../components/Header.js'
import '../components/Category/Category.css'
import Category from '../components/Category/Category.js'
class Directory extends React.Component{
	constructor(){
		super();
		this.state = {
			sections: data
		}
	}

	render() {
		// let	Categories = [];
		// let womenNmen = [];
		// for (let i = 0; i < 3; i++){
		// 	Categories.push(<Category key={i} name={data[i].title}  />)
		// }
		// for (let i = 3; i < 5; i++){
		// 	womenNmen.push(<Category key={i} name={data[i].title} />)
		// }
		return 	(<div>
		<Header />
		<div className='menue w-100 flex flex-column '>
			<div className=' flex mv4 Categories'>
				{ this.state.sections.map(section => <Category key={section.id} name={section.title}  />) }
			</div>
		</div>
	</div>)
	}
}

export default Directory;