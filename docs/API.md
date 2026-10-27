# API · Compliance Checker

Base URL: `http://localhost:8000`

## Endpoints

| Method | Path | Purpose |
| :-- | :-- | :-- |
| `GET` | `/health` | Liveness and agent identity |
| `GET` | `/api/meta` | Agent metadata and provider status |
| `POST` | `/api/run` | Execute the agent with a JSON payload |
| `GET` | `/api/history?limit=20` | Recent local task history |
| `DELETE` | `/api/history` | Clear local history |

Interactive OpenAPI documentation: `GET /docs`.

## POST /api/run

### Request

```json
{
  "payload": {
  "policy": "We encrypt data at rest and in transit. Access is role-based. We have an incident response plan and notify users of breaches within 72 hours.",
  "system_description": "Customer data portal with role-based access control and TLS encryption.",
  "regulation": "GDPR"
}
}
```

### Response

```json
{
  "agent": "plotxyz-compliance-checker-agent",
  "summary": "A concise result summary.",
  "result": {
    "metrics": {},
    "findings": [],
    "table": {"columns": [], "rows": []}
  },
  "warnings": [],
  "task_id": 1
}
```

The exact `result` keys depend on the agent. Common keys include `metrics`, `findings`, `table`, `graph`, `chart`, `patches`, `markdown`, `items`, and agent-specific data.

### Error responses

| Status | Meaning |
| :-- | :-- |
| `413` | Payload exceeds `MAX_PAYLOAD_CHARS` |
| `422` | Missing or invalid agent input; `detail` explains the field |
| `500` | Unexpected server failure (no secrets are returned) |

## Limits

- Payload size: 200,000 characters by default (`MAX_PAYLOAD_CHARS`).
- History: returns at most 50 items.
- No authentication is included in this MVP. Add authentication, rate limiting, and TLS before public deployment.

## Example

```bash
curl -X POST http://localhost:8000/api/run \
  -H "Content-Type: application/json" \
  -d '{"payload": {"policy": "We encrypt data at rest and in transit. Access is role-based. We have an incident response plan and notify users of breaches within 72 hours.", "system_description": "Customer data portal with role-based access control and TLS encryption.", "regulation": "GDPR"}}'
```
