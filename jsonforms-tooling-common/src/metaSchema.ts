import { JsonSchema7 } from '@jsonforms/core';

export const uiMetaSchema: JsonSchema7 = {
  '$schema': 'http://json-schema.org/draft-07/schema',
  'type': 'object',
  '$id': '#root',
  'properties': {
    'type': {
      'type': 'string',
      'enum': [
        'HorizontalLayout',
        'VerticalLayout',
        'Group',
        'Categorization'
      ]
    },
    'label': {
      'type': 'string'
    },
    'elements': {
      '$ref': '#/definitions/elements'
    },
    'rule': {
      '$ref': '#/definitions/rule'
    }
  },
  'definitions': {
    'elements': {
      'type': 'array',
      '$id': '#elements',
      'items': {
        'anyOf': [
          {
            '$ref': '#/definitions/control'
          },
          {
            '$ref': '#/definitions/horizontallayout'
          },
          {
            '$ref': '#/definitions/verticallayout'
          },
          {
            '$ref': '#/definitions/categorization'
          },
          {
            '$ref': '#/definitions/category'
          },
          {
            '$ref': '#/definitions/group'
          },
          {
            '$ref': '#/definitions/label'
          }
        ]
      }
    },
    'label': {
      'type': 'object',
      'properties': {
        'type': {
          'type': 'string',
          'const': 'Label',
          'default': 'Label'
        },
        'text': {
          'type': 'string'
        }
      },
      'required': [
        'type',
        'text'
      ]
    },
    'control': {
      'type': 'object',
      '$id': '#control',
      'properties': {
        'type': {
          'type': 'string',
          'const': 'Control',
          'default': 'Control'
        },
        'label': {
          'type': ['string', 'boolean']
        },
        'scope': {
          '$ref': '#/definitions/scope'
        },
        'options': {
          '$ref': '#/definitions/options'
        },
        'rule': {
          '$ref': '#/definitions/rule'
        }
      },
      'required': ['type', 'scope'],
      'additionalProperties': false,
      'errorMessage': {
        'properties': {
          'type': 'type should be equal to one of the allowed values',
          'scope': 'Control scope should match pattern "^#\\/properties\\/{1}"',
          'suggestion': 'Control suggestion should be array',
          'options': 'Control options should be object',
          'label': 'Control label should be string, boolean or label object'
        },
        'required': {
          'scope': 'Control should have an object property "scope"',
          'type': 'Control should have a string property "type"'
        },
        'additionalProperties': 'Control should not have properties ' +
                                'other than type, label, scope, options, suggestion and rule'
      }
    },
    'horizontallayout': {
      'type': 'object',
      '$id': '#horizontallayout',
      'properties': {
        'type': {
          'type': 'string',
          'const': 'HorizontalLayout',
          'default': 'HorizontalLayout'
        },
        'elements': {
          '$ref': '#/definitions/elements'
        },
        'rule': {
          '$ref': '#/definitions/rule'
        }
      },
      'required': ['type', 'elements'],
      'additionalProperties': false,
      'errorMessage': {
        'properties': {
          'type': 'type should be equal to one of the allowed values'
        },
        'required': {
          'elements': 'Layout should have an array property "elements"',
          'type': 'Layout should have a string property "type"'
        },
        'additionalProperties': 'Layout should not have properties other than type and elements'
      }
    },
    'verticallayout': {
      'type': 'object',
      '$id': '#verticallayout',
      'properties': {
        'type': {
          'type': 'string',
          'const': 'VerticalLayout',
          'default': 'VerticalLayout'
        },
        'elements': {
          '$ref': '#/definitions/elements'
        },
        'rule': {
          '$ref': '#/definitions/rule'
        }
      },
      'required': [
        'type',
        'elements'
      ]
    },
    'categorization': {
      'type': 'object',
      '$id': '#categorization',
      'properties': {
        'type': {
          'type': 'string',
          'const': 'Categorization',
          'default': 'Categorization'
        },
        'elements': {
          'type': 'array',
          'items': {
            '$ref': '#/definitions/category'
          }
        }
      },
      'required': [
        'type',
        'elements'
      ],
      'additionalProperties': false,
      'errorMessage': {
        'properties': {
          'type': 'type should be equal to one of the allowed values'
        },
        'required': {
          'elements': 'Categorization should have an array property "elements"',
          'type': 'Categorization should have a string property "type"'
        },
        'additionalProperties': 'Categorization should not have properties ' +
                                'other than type and elements'
      }
    },
    'category': {
      'type': 'object',
      '$id': '#category',
      'properties': {
        'label': {
          'type': 'string'
        },
        'elements': {
          '$ref': '#/definitions/elements'
        },
        'type': {
          'type': 'string',
          'const': 'Category',
          'default': 'Category'
        },
        'rule': {
          '$ref': '#/definitions/rule'
        }
      },
      'additionalProperties': false,
      'errorMessage': {
        'properties': {
          'type': 'type should be equal to one of the allowed values',
          'label': 'Category label should be string'
        },
        'required': {
          'type': 'Category layout should have a string property "type"',
          'elements': 'Category layout should have an array property "elements"'
        },
        'additionalProperties': 'Category layout should not have properties ' +
                                'other than type,elements and label'
      }
    },
    'group': {
      'type': 'object',
      '$id': '#group',
      'properties': {
        'type': {
          'type': 'string',
          'const': 'Group',
          'default': 'Group'
        },
        'elements': {
          '$ref': '#/definitions/elements'
        },
        'label': {
          'type': 'string'
        }
      },
      'required': ['type', 'elements', 'label'],
      'additionalProperties': false,
      'errorMessage': {
        'properties': {
          'type': 'type should be equal to one of the allowed values',
          'label': 'Group label should be string'
        },
        'required': {
          'type': 'Group layout should have a string property "type"',
          'elements': 'Group layout should have an array property "elements"',
          'label': 'Group layout should have a string property "label"'
        },
        'additionalProperties': 'Group layout should not have properties ' +
                                'other than type,elements and label'
      }
    },
    'rule': {
      'type': 'object',
      '$id': '#rule',
      'properties': {
        'effect': {
          'type': 'string',
          'enum': [
            'HIDE',
            'SHOW',
            'DISABLE',
            'ENABLE'
          ]
        },
        'condition': {
          'type': 'object',
          'properties': {
            'type': {
              'type': 'string',
              'const': 'LEAF',
              'default': 'LEAF'
            },
            'scope': {
              '$ref': '#/definitions/scope'
            },
            'expectedValue': {
              'type': [
                'string',
                'integer',
                'number',
                'boolean'
              ]
            }
          },
          'required': [
            'type',
            'scope',
            'expectedValue'
          ]
        }
      },
      'dependencies': {
        'effect': ['condition'],
        'condition': ['effect']
      },
      'errorMessage': {
        'dependencies': {
          'effect': 'Effect has to de defined',
          'condition': 'Condition has to be defined',
        }
      }
    },
    'scope': {
      'type': 'string',
      '$id': '#scope',
      'pattern': '^#\\/properties\\/{1}'
    },
    'options': {
      'type': 'object',
      '$id': '#options',
      'additionalProperties': true
    }
  },
  'required': [
    'elements',
    'type'
  ],
  'additionalProperties': false,
  'errorMessage': {
    'properties': {
      'type': 'Root type should be equal to one of the allowed values',
      'label': 'Root label should be string'
    },
    'required': {
      'elements': 'Root should have an array property "elements"',
      'type': 'Root should have a string property "type"'
    },
    'additionalProperties': 'Root should not have properties ' +
                            'other than type, elements, label and rule'
  }
};

export default uiMetaSchema;
