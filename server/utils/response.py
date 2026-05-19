from flask import jsonify


def success(data=None, message='Success', status=200):
    return jsonify({'success': True, 'message': message, 'data': data}), status


def error(message='Something went wrong', status=400, errors=None):
    payload = {'success': False, 'message': message}
    if errors:
        payload['errors'] = errors
    return jsonify(payload), status
