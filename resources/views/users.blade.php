<!DOCTYPE html>
<html lang="{{ str_replace('_', '-', app()->getLocale()) }}">
    <head>
        <meta charset="utf-8">
        <meta name="viewport" content="width=device-width, initial-scale=1">

        <title>Ash</title>
    </head>
    <body>
        <form method="post" action="{{ route('users.create') }}">
            <input type="submit" value="submit">
        </form>
    </body>
</html>