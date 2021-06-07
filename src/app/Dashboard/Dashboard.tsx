import * as React from 'react';
import { PageSection, Select, SelectOption, SelectVariant, Title } from '@patternfly/react-core';

function MultiTypeaheadSelect({ options }) {
  const [isOpen, setIsOpen] = React.useState(false);
  const [selection, setSelection] = React.useState<string[]>([]);

  const onSelect = (e, selected) => {
    setSelection((prevState) =>
      selection.includes(selected) ? prevState.filter((item) => item !== selected) : [...prevState, selected]
    );
  };

  const clearSelection = () => {
    setSelection([]);
    setIsOpen(false);
  };

  return (
    <Select
      variant={SelectVariant.typeaheadMulti}
      onToggle={(isExpanded) => setIsOpen(isExpanded)}
      onSelect={onSelect}
      onClear={clearSelection}
      selections={selection}
      isOpen={isOpen}
      typeAheadAriaLabel="Select a state"
      placeholderText="Select a state"
    >
      {options.map((option, index) => (
        <SelectOption key={index} value={option.value} isDisabled={option.disabled} description={option.description} />
      ))}
    </Select>
  );
}

const Dashboard: React.FunctionComponent = () => {
  const options = [
    { value: 'Alabama', disabled: false },
    { value: 'Florida', disabled: false },
    { value: 'New Jersey', disabled: false },
    { value: 'New Mexico', disabled: false, description: 'This is a description' },
    { value: 'New York', disabled: false },
    { value: 'North Carolina', disabled: false },
  ];

  return (
    <PageSection variant="light">
      <Title headingLevel="h1" size="lg">
        Dashboard Page Title
      </Title>
      <br />
      <MultiTypeaheadSelect options={options} />
    </PageSection>
  );
};

export { Dashboard };
