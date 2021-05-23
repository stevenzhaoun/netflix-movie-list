import { Fragment, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addMovieAction, loadMovieDataAction, removeMovieAction } from './actions';
import List from './components/List';
import styles from './App.module.css'


function App() {

  const dispatch = useDispatch();
  const { myList, recommendations, loading } = useSelector((state) => {
    return state.list
  })
  useEffect(() => {
    dispatch(loadMovieDataAction());
  }, [dispatch]);

  const handleAdd = (movie) => {
    dispatch(addMovieAction(movie));
  }

  const handleRemove = (movie) => {
    dispatch(removeMovieAction(movie.id))
  }
  return (
    <div >
      <img
        className={styles.logo}
        src="https://logos-world.net/wp-content/uploads/2020/04/Netflix-Symbol.png"
      />
      {loading
        ? <div>Loading</div>
        : <Fragment>
          <List
            title="Recommendations"
            data={recommendations}
            buttonText="Add"
            onButtonClick={handleAdd}
          />
          <hr />
          <List
            title="My List"
            data={myList}
            buttonText="Remove"
            onButtonClick={handleRemove}
          />
        </Fragment>}

    </div>
  );
}

export default App;
