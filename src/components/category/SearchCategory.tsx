import React from 'react';
import { Grid, TextField, InputAdornment, IconButton, Paper, List, ListItem, ListItemText } 
    from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';
import AddIcon from '@material-ui/icons/AddCircleRounded';
import CloseIcon from '@material-ui/icons/CloseOutlined';
import AddCategory from "./AddCategory";
import { searchCategories } from "../../controllers/category-manager.controller";
import "./Category.css";

interface ICategory {
    id: string;
    name : string;
    description: string;
}

export default class SearchCategory extends React.Component {
 
    state = {
        searchText : "",
        categories : [],
        selectedCategory : [],
        isDisplaySuggest : false,
        isDispalyFormAdd : false
    }

    handleSearch = (ev : any) => {
        const searchText = ev.target.value
        this.setState({ searchText  })

        if(searchText.length){
            this.setState({ isDisplaySuggest : true })

            searchCategories()
            .then(json => {
                this.setState({ categories : json })
            })
        }else{
            this.setState({ isDisplaySuggest : false })
        }
    }

    handleSelectSuggest = (category : ICategory) => {
        const {selectedCategory} = this.state;

        this.setState({ selectedCategory : [...selectedCategory, category],
                        isDisplaySuggest : false })
    }

    toggleFormAddCategory = () => {
        this.setState({ isDispalyFormAdd : !this.state.isDispalyFormAdd })
    }
    

    deleteCategory = (category : ICategory) => {
        const newSelectedCategory = this.state.selectedCategory
                                        .filter((c :ICategory) => c.id !== category.id);

        this.setState({selectedCategory: newSelectedCategory })
    }


    render() {  
        const { searchText, categories, selectedCategory,
            isDisplaySuggest, isDispalyFormAdd } = this.state

        return (
            <Grid container 
                  direction="column" 
                  wrap="wrap" 
                  className="category-search"
                  >
            <AddCategory toggleMe={this.toggleFormAddCategory} open={isDispalyFormAdd} />
            <Grid item xs style={{width:"100%"}} >
                    <Grid container alignItems="flex-end">
                        <Grid item xs>
                            <TextField 
                                label="Search Category" 
                                onChange={this.handleSearch}
                                value={searchText}
                                multiline
                                fullWidth
                                InputProps={{
                                    startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                    ),
                                }}
                                />
                        </Grid>
                    <Grid item>
                    <IconButton onClick={this.toggleFormAddCategory} style={{padding: "5px"}}>
                        <AddIcon />
                    </IconButton>
                </Grid> 
            </Grid>
            </Grid>
            <Grid item xs style={{width:"100%"}}>
            {selectedCategory.map( (category :ICategory, idx) => (
                <Paper key={idx} className="category">
                    {category.name} 
                    <IconButton 
                        onClick={()=>{ this.deleteCategory(category) }}
                        color="secondary" 
                        style={{padding: "5px"}}>
                            <CloseIcon style={{ fontSize: 12 }}  />
                    </IconButton>
                </Paper>
            ))
            }
            </Grid>
            <Grid item xs className="category-suggestion">
                    {isDisplaySuggest ? 
                    <Paper>
                        {categories.map( (category :ICategory, idx) =>{
                        const {name,description} = category;
                            return(
                                <List key={idx}>
                                    <ListItem button onClick={() => { this.handleSelectSuggest(category) } }>
                                        {name}<br/>
                                        {description}
                                    </ListItem>
                                </List>
                                )
                            })
                        }
                    </Paper> 
                    : null }
            </Grid>
          </Grid>
          )
    }
}