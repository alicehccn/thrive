export const Provider = {
  $id: 'provider-schema.json',
  name: { type: 'string' },
  phone: { type: 'string' },
  email: { type: 'string' },
  details: {
    $ref: 'details.json',
    type: 'object',
  },
  market: {
    $ref: 'market.json',
    type: 'object',
  },
  patients: [
    {
      $ref: 'patient.json',
      type: 'object',
    },
  ],
  requests: [
    {
      $ref: 'request.json',
      type: 'object',
    },
  ],
};
