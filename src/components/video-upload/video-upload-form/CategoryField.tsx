import React from 'react';
import deburr from 'lodash.deburr';
import Downshift from 'downshift';
import { createStyles, makeStyles, Theme } from '@material-ui/core/styles';
import TextField, { TextFieldProps } from '@material-ui/core/TextField';
import Popper from '@material-ui/core/Popper';
import Paper from '@material-ui/core/Paper';
import MenuItem, { MenuItemProps } from '@material-ui/core/MenuItem';
import Chip from '@material-ui/core/Chip';

interface Suggestion {
  label: string;
}

const suggestions: Suggestion[] = [
  { label: 'Pendidikan' },
  { label: 'Agama' },
  { label: 'Hiburan' },
  { label: 'Matematika' },
  { label: 'Biologi' },
];

type RenderInputProps = TextFieldProps & {
  classes: ReturnType<typeof useStyles>;
  ref?: React.Ref<HTMLDivElement>;
};

function renderInput(inputProps: RenderInputProps) {
  const { InputProps, classes, ref, ...other } = inputProps;

  return (
    <TextField
      InputLabelProps={{ shrink: true }}
      InputProps={{
        inputRef: ref,
        classes: {
          root: classes.inputRoot,
          input: classes.inputInput,
        },
        ...InputProps,
      }}
      {...other}
    />
  );
}

interface RenderSuggestionProps {
  highlightedIndex: number | null;
  index: number;
  itemProps: MenuItemProps<'div', { button?: never }>;
  selectedItem: Suggestion['label'];
  suggestion: Suggestion;
}

function renderSuggestion(suggestionProps: RenderSuggestionProps) {
  const { suggestion, index, itemProps, highlightedIndex, selectedItem } = suggestionProps;
  const isHighlighted = highlightedIndex === index;
  const isSelected = (selectedItem || '').indexOf(suggestion.label) > -1;

  return (
    <MenuItem
      {...itemProps}
      key={suggestion.label}
      selected={isHighlighted}
      component="div"
      style={{
        fontWeight: isSelected ? 500 : 400,
      }}
    >
      {suggestion.label}
    </MenuItem>
  );
}

function getSuggestions(value: string, { showEmpty = false } = {}) {
  const inputValue = deburr(value.trim()).toLowerCase();
  const inputLength = inputValue.length;
  let count = 0;

  return inputLength === 0 && !showEmpty
    ? []
    : suggestions.filter(suggestion => {
        const keep =
          count < 5 && suggestion.label.slice(0, inputLength).toLowerCase() === inputValue;

        if (keep) {
          count += 1;
        }

        return keep;
      });
}

interface DownshiftMultipleProps {
  classes: ReturnType<typeof useStyles>;
}

function DownshiftMultiple(props: DownshiftMultipleProps) {
  const { classes } = props;
  const [inputValue, setInputValue] = React.useState('');
  const [selectedItem, setSelectedItem] = React.useState<Array<Suggestion['label']>>([]);

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (selectedItem.length && !inputValue.length && event.key === 'Backspace') {
      setSelectedItem(selectedItem.slice(0, selectedItem.length - 1));
    }
  };

  const handleInputChange = (event: React.ChangeEvent<{ value: string }>) => {
    setInputValue(event.target.value);
  };

  const handleChange = (item: Suggestion['label']) => {
    let newSelectedItem = [...selectedItem];
    if (newSelectedItem.indexOf(item) === -1) {
      newSelectedItem = [...newSelectedItem, item];
    }
    setInputValue('');
    setSelectedItem(newSelectedItem);
  };

  const handleDelete = (item: string) => () => {
    const newSelectedItem = [...selectedItem];
    newSelectedItem.splice(newSelectedItem.indexOf(item), 1);
    setSelectedItem(newSelectedItem);
  };

  return (
    <Downshift
      id="downshift-multiple"
      inputValue={inputValue}
      onChange={handleChange}
      selectedItem={selectedItem}
    >
      {({
        getInputProps,
        getItemProps,
        getLabelProps,
        isOpen,
        inputValue: inputValue2,
        selectedItem: selectedItem2,
        highlightedIndex,
      }) => {
        const { onBlur, onChange, onFocus, ...inputProps } = getInputProps({
          onKeyDown: handleKeyDown,
          placeholder: '',
        });
        return (
          <div className={classes.container}>
            {renderInput({
              fullWidth: true,
              classes,
              label: '',
              variant: 'outlined',
              InputLabelProps: getLabelProps(),
              InputProps: {
                startAdornment: selectedItem.map(item => (
                  <Chip
                    key={item}
                    tabIndex={-1}
                    label={item}
                    className={classes.chip}
                    onDelete={handleDelete(item)}
                  />
                )),
                onBlur,
                onChange: event => {
                  handleInputChange(event);
                  onChange!(event as React.ChangeEvent<HTMLInputElement>);
                },
                onFocus,
              },
              inputProps,
            })}
            {isOpen ? (
              <Paper className={classes.paper} square>
                {getSuggestions(inputValue2!).map((suggestion, index) =>
                  renderSuggestion({
                    suggestion,
                    index,
                    itemProps: getItemProps({ item: suggestion.label }),
                    highlightedIndex,
                    selectedItem: selectedItem2,
                  }),
                )}
              </Paper>
            ) : null}
          </div>
        );
      }}
    </Downshift>
  );
}

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      height: 'auto',
    },
    container: {
      flexGrow: 1,
      position: 'relative',
      margin: "10px 0"
    },
    paper: {
      position: 'absolute',
      zIndex: 1,
      marginTop: theme.spacing(1),
      left: 0,
      right: 0,
    },
    chip: {
      margin: theme.spacing(0.5, 0.25),
    },
    inputRoot: {
      flexWrap: 'wrap',
    },
    inputInput: {
      width: 'auto',
      flexGrow: 1,
      padding: "10px 0"
    },
    divider: {
      height: theme.spacing(2),
    },
  }),
);


export default function IntegrationDownshift() {
  const classes = useStyles();

  return (
    <div >
      <DownshiftMultiple classes={classes} />
    </div>
  );
}
