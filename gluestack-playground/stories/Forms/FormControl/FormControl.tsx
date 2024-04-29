import React from "react";
import {
  FormControl,
  FormControlLabel,
  FormControlLabelText,
  FormControlHelper,
  FormControlHelperText,
  FormControlError,
  FormControlErrorIcon,
  FormControlErrorText,
  Input,
  InputField,
  InputSlot,
  InputIcon,
  AlertCircleIcon,
  EyeOffIcon,
} from "@gluestack-ui/themed";

const FormControlBasic = ({ colorMode, ...props }) => {
  let inputState = "default";
  if (props.isInvalid) {
    inputState = "isInvalid";
  } else if (props.isDisabled) {
    inputState = "isDisabled";
  }
  return (
    <FormControl {...props}>
      <FormControlLabel>
        <FormControlLabelText
          dataSet={{
            "component-props": JSON.stringify({
              "is-text-style": true,
              "component-name": "Text-medium",
              size: "md",
            }),
          }}
        >
          Password
        </FormControlLabelText>
      </FormControlLabel>
      <Input
        dataSet={{
          "component-props": JSON.stringify({
            instance: true,
            "instance-name": "Input-outline",
            size: "md",
            state: inputState,
            colorMode: colorMode,
          }),
        }}
      >
        <InputField
          type="password"
          defaultValue="12345"
          placeholder="password"
        />
        <InputSlot pr={props.variant === "underlined" ? "$0" : "$4"}>
          <InputIcon
            as={EyeOffIcon}
            dataSet={{
              "component-props": JSON.stringify({
                instance: true,
                "instance-name": "Icon",
                as: "SearchIcon",
                size: "sm",
                colorMode: colorMode,
              }),
            }}
          />
        </InputSlot>
      </Input>

      <FormControlHelper>
        <FormControlHelperText
          dataSet={{
            "component-props": JSON.stringify({
              "is-text-style": true,
              "component-name": "Text",
              size: "xs",
            }),
          }}
        >
          Must be atleast 6 characters.
        </FormControlHelperText>
      </FormControlHelper>

      <FormControlError>
        <FormControlErrorIcon
          as={AlertCircleIcon}
          dataSet={{
            "component-props": JSON.stringify({
              instance: true,
              "instance-name": "Icon",
              as: "AlertCircleIcon",
              size: "sm",
              colorMode: colorMode,
            }),
          }}
        />
        <FormControlErrorText
          dataSet={{
            "component-props": JSON.stringify({
              "is-text-style": true,
              "component-name": "Text",
              size: "md",
            }),
          }}
        >
          Atleast 6 characters are required.
        </FormControlErrorText>
      </FormControlError>
    </FormControl>
  );
};

FormControlBasic.description =
  "This is a basic FormControl component example.  A form control is a component that users can interact with to enter or select data.";

export default FormControlBasic;
