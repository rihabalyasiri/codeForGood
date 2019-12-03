import React, { Component } from 'react';
import './Filter.css'



class Filter extends Component {

    constructor(props) {
        super(props);
        this.state = {
            dataAfterSort: '',
            isAllKategorien: true,
            isAppNative: false,
            isWebApp: false,
            isWebsite: false,
            isHtml: true,
            isJavascript: false,
            isReact: false,
            isNode: false,
            isProgress:false,
            isNew:false,
            isDone:false
        }
    }



    projekttypenHandler = (e) => {
        this.setState({
            isAllKategorien: false,
            isAppNative: false,
            isWebApp: false,
            isWebsite: false
        })
        const value = e.target.selected;
        const label = e.target.value;
        this.setState({ [label]: !value })


    }

    aufgabenHandler = (e) => {
        this.setState({
            isHtml: false,
            isJavascript: false,
            isReact: false,
            isNode: false
        })

        const value = e.target.selected;
        const label = e.target.value;
        this.setState({ [label]: !value })



    }

    radioChangeHandler = (e) => {
        this.setState({
            isDone:false,
            isNew:false,
            isProgress:false,
        })
        console.log(e.target.value)
        console.log(e.target.checked)
        const name = e.target.value;
        const value = e.target.checked;

        this.setState({[name]:value})
    }





    render() {
        return (
            <div className="filter-block">
                <div className="block">
                    <h2 className="heading">Sortieren nach:</h2>
                    <label htmlFor="projekttypen" className="label">Projekttypen:
            <select className="input" name="projekttypen" id="projekttypen" onChange={this.projekttypenHandler} value={this.state.projekttypen}>
                            <option value="isAllKategorien" >All Kategorien</option>
                            <option value="isAppNative" >App Native</option>
                            <option value="isWebApp" >Web App</option>
                            <option value="isWebsite" >Website</option>
                        </select>
                    </label>
                    <label htmlFor="spenden" className="label">Budget:
            <input type="range" name="budget" id="budget" min="0" max="3000" />
                        <output htmlFor="budget"></output>
                    </label>
                    <label htmlFor="progress" className="label">Progress:
              <label htmlFor="" className="radio-label label">  <input type="radio" name="progress" id="progress" onChange={this.radioChangeHandler} value="isProgress" />in Bearbeitung</label>
                        <label htmlFor="" className="radio-label label"> <input type="radio" name="progress" id="progress" value="isDone" onChange={this.radioChangeHandler} />Fertig</label>
                        <label htmlFor="" className="radio-label label"> <input type="radio" name="progress" id="progress" value="isNeW" onChange={this.radioChangeHandler}  />Neu</label>
                    </label>
                    <label htmlFor="aufgabe" className="label input" onChange={this.aufgabenHandler}>Aufgaben:
            <select name="aufgabe" id="aufgabe">
                            <option value="isHtml">HTML/CSS</option>
                            <option value="isJavascript">JavaScript</option>
                            <option value="isReact">React.js</option>
                            <option value="isNode">Node</option>
                        </select>
                    </label>
                    <label htmlFor="datum" className="label input">Datum:
            <input type="date" name="date" id="date" />
                    </label>
                </div>
                <input type="button" value="Suche" onClick={this.sucheHandler} className="such-btn" />

            </div>
        );
    }
}

export default Filter;