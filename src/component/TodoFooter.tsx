import classNames from 'classnames';
import { useContext } from 'react';
import { TodosContext } from '../TodosProvider/TodosProvider';
import { Status } from '../enum/Status';

export const TodoFooter: React.FC = () => {
  const { todos, handleClearCompleted, selectFilter, setSelectFilter } =
    useContext(TodosContext);

  const visibleClearCompleted = todos.some(todo => todo.completed);
  const todosLeft = todos.filter(todo => !todo.completed);

  return (
    <footer className="todoapp__footer" data-cy="Footer">
      <span className="todo-count" data-cy="TodosCounter">
        {todosLeft.length} items left
      </span>

      <nav className="filter" data-cy="Status">
        <a
          href={Status.all}
          className={classNames('filter__link', {
            selected: selectFilter === Status.all || !selectFilter,
          })}
          data-cy="FilterLinkAll"
          onClick={() => setSelectFilter(Status.all)}
        >
          All
        </a>

        <a
          href={Status.active}
          className={classNames('filter__link', {
            selected: selectFilter === Status.active,
          })}
          data-cy="FilterLinkActive"
          onClick={() => setSelectFilter(Status.active)}
        >
          Active
        </a>

        <a
          href={Status.completed}
          className={classNames('filter__link', {
            selected: selectFilter === Status.completed,
          })}
          data-cy="FilterLinkCompleted"
          onClick={() => setSelectFilter(Status.completed)}
        >
          Completed
        </a>
      </nav>

      <button
        type="button"
        className="todoapp__clear-completed"
        data-cy="ClearCompletedButton"
        disabled={!visibleClearCompleted}
        onClick={handleClearCompleted}
      >
        Clear completed
      </button>
    </footer>
  );
};
