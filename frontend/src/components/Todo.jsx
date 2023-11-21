import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  ListItem,
  ListItemText,
  InputBase,
  Checkbox,
  ListItemSecondaryAction,
  IconButton,
} from '@material-ui/core';

import DeleteOutlineIcon from '@material-ui/icons/DeleteOutline';

class Todo extends Component {
  constructor(props) {
    super(props);

    this.state = {
      item: props.item,
      readOnly: true,
    };

    this.delete = props.delete;
  }

  deleteEventHandler = () => {
    const { item } = this.state; // 구조 분해 사용
    this.delete(item);
  };

  offReadOnlyMode = () => {
    this.setState((prevState) => ({ readOnly: !prevState.readOnly }));
  };

  enterKeyEventHandler = (e) => {
    if (e.key === 'Enter') {
      this.setState({ readOnly: true });
    }
  };

  editEventHandler = (e) => {
    const { item } = this.state;
    const updatedItem = { ...item, title: e.target.value };
    this.setState({ item: updatedItem });
  };

  checkboxEventHandler = () => {
    this.setState(({ item }) => ({
      item: { ...item, done: !item.done },
    }));
  };

  render() {
    const { item, readOnly } = this.state;

    return (
      <div>
        <ListItem>
          <Checkbox checked={item.done} onChange={this.checkboxEventHandler} />
          <ListItemText>
            <InputBase
              inputProps={{
                'aria-label': 'naked',
                readOnly,
              }}
              type="text"
              id={item.id}
              name={item.id}
              value={item.title}
              fullWidth // 단순히 boolean 속성에 대한 존재 여부 {(fullWidth= true) 할 필요가 없음}
              onClick={this.offReadOnlyMode}
              onChange={this.editEventHandler}
              onKeyPress={this.enterKeyEventHandler}
            />
          </ListItemText>
          <ListItemSecondaryAction>
            <IconButton
              aria-label="Delete Todo"
              onClick={this.deleteEventHandler}
            >
              <DeleteOutlineIcon />
            </IconButton>
          </ListItemSecondaryAction>
        </ListItem>
      </div>
    );
  }
}

Todo.propTypes = {
  item: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    done: PropTypes.bool.isRequired,
  }).isRequired,
  delete: PropTypes.func.isRequired,
};

export default Todo;
